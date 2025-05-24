'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, findUser, createUser } from '@/lib/static-data';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, userData: Partial<User>) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate checking local storage for saved session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    const user = findUser(email, password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const signUp = async (email: string, password: string, userData: Partial<User>) => {
    const newUser = createUser({
      email,
      first_name: userData.first_name || '',
      last_name: userData.last_name || '',
      role: userData.role || 'student',
    });
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};