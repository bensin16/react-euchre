import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { IUser } from 'types';
import { auth, db } from 'services';

const CurrentUserContext = createContext<IUser | undefined>(undefined);

export const CurrentUserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (u) => {
      if (u?.uid) {
        // TODO: replace with constants, figure out how to use constants from the dir
        const doc = await db.collection('users').doc(u?.uid).get();
        if (doc.exists) return setUser({ ...doc.data(), id: doc.id } as IUser);
      }
      return setUser(undefined);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <CurrentUserContext.Provider value={user}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => useContext(CurrentUserContext);
