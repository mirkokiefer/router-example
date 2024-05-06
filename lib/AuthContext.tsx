import { createContext, useState, useEffect, useContext } from 'react';

interface AuthContextValue {
  isAuth: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  async function signIn() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsAuth(true);
  }

  async function signOut() {
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);