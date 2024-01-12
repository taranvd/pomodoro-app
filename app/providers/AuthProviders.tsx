import * as Splash from 'expo-splash-screen';
import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { View, Text } from 'react-native';
import type { IUser } from '@/types/user.interface';

export type TypeUserState = IUser | null;

interface IContentext {
  user: TypeUserState;
  setUser: Dispatch<SetStateAction<TypeUserState>>;
}

export const AuthContext = createContext({} as IContentext);

let ignore = Splash.preventAutoHideAsync();

const AuthProviders: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>(null);

  useEffect(() => {
    //Get user from async storage and write to store
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
