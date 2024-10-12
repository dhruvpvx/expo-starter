import { useEffect, useState } from 'react';
import AuthContext from './auth-context';
import { FirebaseAuthService } from '@/services';
import { router } from 'expo-router';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(FirebaseAuthService.user);

  useEffect(() => {
    const unsubscribe = FirebaseAuthService.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        router.replace('/');
      } else {
        router.replace('/sign-in');
      }
    });
    return unsubscribe;
  }, []);

  if (user === undefined) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
