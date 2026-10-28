import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private platformId = inject(PLATFORM_ID);
  public app: FirebaseApp | null = null;
  public auth: Auth | null = null;
  public db: Firestore | null = null;
  public readonly isBrowser: boolean;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.app = getApps().length === 0 ? initializeApp(environment.firebase) : getApps()[0];
      this.auth = getAuth(this.app);
      this.db = getFirestore(this.app);
    }
  }
}
