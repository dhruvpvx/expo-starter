import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { router } from 'expo-router';

class FirebaseAuthService {
  static user: FirebaseAuthTypes.User | null = null;

  static async sendOtp(phoneNumber: string, country = '+91') {
    return auth().signInWithPhoneNumber(`${country}${phoneNumber}`);
  }

  static async verifyOtp(verificationId: string, otp: string) {
    const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
    return auth().signInWithCredential(credential);
  }

  static resendOtp(phoneNumber: string, country = '+91') {
    return auth().signInWithPhoneNumber(`${country}${phoneNumber}`, true);
  }

  static async signOut() {
    await auth().signOut();
    router.dismissAll();
    router.replace('/sign-in');
  }

  static onAuthStateChanged(callback: (user: typeof this.user) => void) {
    return auth().onAuthStateChanged(callback);
  }
}

export default FirebaseAuthService;
