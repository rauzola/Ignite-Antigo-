import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

import { api } from "../services/api";

type User = {
  email: string;
  permissions: string[];
  roles: string[];
}

type SingnInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  singnIn(credentials: SingnInCredentials): Promise<void>;
  user?: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()
    
    if (token) {
      api.get('/me').then(response => {
       const { email, permissions, roles } = response.data

       setUser({ email, permissions, roles })
      })
    }

  }, [])

  async function singnIn({ email, password }: SingnInCredentials) {
   try {
    const response = await api.post('sessions', {
      email,
      password,
    })
    
    const { token, refreshToken, permissions, roles } = response.data;

    setCookie(undefined, 'nextauth.token',token, {
      maxAge: 60 * 60 * 24 * 30, // 30 day
      path: '/'
    })

    setCookie(undefined, 'nextauth.refreshToken',refreshToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 day
      path: '/'
    })

    setUser({
      email,
      permissions,
      roles,
    })

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    Router.push('/dashboard')
   } catch (err) {
     console.log(err);
   }
  }

  return (
    <AuthContext.Provider value={{ singnIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}