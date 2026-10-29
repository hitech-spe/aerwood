import { Injectable, inject, signal, computed } from '@angular/core';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { FirebaseService } from './firebase.service';

export interface UserProfile {
  uid: string;
  fullName: string;
  email: string;
  createdAt?: unknown;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private fb = inject(FirebaseService);

  public readonly currentUser = signal<User | null>(null);
  public readonly userProfile = signal<UserProfile | null>(null);
  public readonly isLoading = signal<boolean>(true);
  public readonly isLoggedIn = computed(() => !!this.currentUser());
  public readonly isApproved = computed(() => this.isLoggedIn());

  constructor() {
    if (this.fb.isBrowser && this.fb.auth) {
      onAuthStateChanged(this.fb.auth, async (user) => {
        this.currentUser.set(user);
        if (user && this.fb.db) {
          try {
            const userDocRef = doc(this.fb.db, 'users', user.uid);
            const userSnap = await getDoc(userDocRef);
            if (userSnap.exists()) {
              this.userProfile.set(userSnap.data() as UserProfile);
            } else {
              const defaultProfile: UserProfile = {
                uid: user.uid,
                fullName: user.displayName || user.email?.split('@')[0] || 'Utente',
                email: (user.email || '').toLowerCase()
              };
              this.userProfile.set(defaultProfile);
            }
          } catch (e) {
            console.warn('Could not load user profile from Firestore:', e);
          }
        } else {
          this.userProfile.set(null);
        }
        this.isLoading.set(false);
      });
    } else {
      this.isLoading.set(false);
    }
  }

  async login(email: string, pass: string): Promise<User> {
    if (!this.fb.auth) {
      throw new Error('Authentication is only available in the browser.');
    }
    const cred = await signInWithEmailAndPassword(this.fb.auth, email.trim(), pass);
    return cred.user;
  }

  async loginWithGoogle(): Promise<User> {
    if (!this.fb.auth) {
      throw new Error('Authentication is only available in the browser.');
    }
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const cred = await signInWithPopup(this.fb.auth, provider);
    const user = cred.user;

    const profile: UserProfile = {
      uid: user.uid,
      fullName: user.displayName || user.email?.split('@')[0] || 'Utente',
      email: (user.email || '').toLowerCase(),
      createdAt: serverTimestamp()
    };

    if (this.fb.db) {
      try {
        const userDocRef = doc(this.fb.db, 'users', user.uid);
        const userSnap = await getDoc(userDocRef);
        if (!userSnap.exists()) {
          await setDoc(userDocRef, profile);
        }
      } catch (e) {
        console.warn('Could not persist Google user profile:', e);
      }
    }

    this.userProfile.set(profile);
    return user;
  }

  async register(email: string, pass: string, fullName: string): Promise<User> {
    if (!this.fb.auth) {
      throw new Error('Authentication is only available in the browser.');
    }
    const cred = await createUserWithEmailAndPassword(this.fb.auth, email.trim(), pass);
    const user = cred.user;

    try {
      await updateProfile(user, { displayName: fullName.trim() });
    } catch {
      // Non-fatal
    }

    const profile: UserProfile = {
      uid: user.uid,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      createdAt: serverTimestamp()
    };

    if (this.fb.db) {
      try {
        await setDoc(doc(this.fb.db, 'users', user.uid), profile);
      } catch (e) {
        console.warn('Error saving user profile to Firestore:', e);
      }
    }

    this.userProfile.set(profile);
    return user;
  }

  async resetPassword(email: string): Promise<void> {
    if (!this.fb.auth) {
      throw new Error('Authentication is only available in the browser.');
    }
    await sendPasswordResetEmail(this.fb.auth, email.trim());
  }

  async logout(): Promise<void> {
    if (!this.fb.auth) return;
    await signOut(this.fb.auth);
    this.currentUser.set(null);
    this.userProfile.set(null);
  }
}
