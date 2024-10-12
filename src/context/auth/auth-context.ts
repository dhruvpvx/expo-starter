import { FirebaseAuthService } from '@/services';
import { createContext } from 'react';

interface AuthContextType {
  user: typeof FirebaseAuthService.user;
}

const AuthContext = createContext<AuthContextType>({
  user: FirebaseAuthService.user,
});

export default AuthContext;
