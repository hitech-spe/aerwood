import { Injectable, inject, signal, computed } from '@angular/core';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { FirebaseService } from './firebase.service';

export type UserRole = 'progettista' | 'posatore' | 'rivenditore' | 'impresa' | 'altro';

export interface UserProfile {
  uid: string;
  fullName: string;
  company: string;
  email: string;
  role: UserRole;
  status: 'pending' | 'approved';
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
  public readonly isApproved = computed(() => {
    const profile = this.userProfile();
    const user = this.currentUser();
    if (user?.email?.endsWith('@fortesrl.it') || user?.email?.endsWith('@hitech.it')) {
      return true;
    }
    return profile?.status === 'approved';
  });

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
              this.userProfile.set({
                uid: user.uid,
                fullName: user.displayName || '',
                company: '',
                email: user.email || '',
                role: 'progettista',
                status: 'approved'
              });
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
    const cred = await signInWithEmailAndPassword(this.fb.auth, email, pass);
    return cred.user;
  }

  async register(
    email: string,
    pass: string,
    details: { fullName: string; company: string; role: UserRole }
  ): Promise<User> {
    if (!this.fb.auth || !this.fb.db) {
      throw new Error('Firebase services are not available.');
    }
    const cred = await createUserWithEmailAndPassword(this.fb.auth, email, pass);
    const user = cred.user;

    const profile: UserProfile = {
      uid: user.uid,
      fullName: details.fullName,
      company: details.company,
      email: email.trim().toLowerCase(),
      role: details.role,
      status: 'pending', // Account requires manual approval by Forte Srl
      createdAt: serverTimestamp()
    };

    try {
      await setDoc(doc(this.fb.db, 'users', user.uid), profile);
      this.userProfile.set(profile);
    } catch (e) {
      console.warn('Error saving user profile to Firestore:', e);
    }

    return user;
  }

  async resetPassword(email: string): Promise<void> {
    if (!this.fb.auth) {
      throw new Error('Authentication is only available in the browser.');
    }
    await sendPasswordResetEmail(this.fb.auth, email);
  }

  async logout(): Promise<void> {
    if (!this.fb.auth) return;
    await signOut(this.fb.auth);
    this.currentUser.set(null);
    this.userProfile.set(null);
  }
}
