import { useCallback, useEffect, useState } from 'react';

import { db } from 'services';

import { ILobbyItem } from 'types';

interface IOutput {
  isFetching: boolean;
  lobbies: ILobbyItem[];
}

const useLobbies = (): IOutput => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [lobbies, setLobbies] = useState<ILobbyItem[]>([]);

  async function formatLobbyDoc(
    lobbyDoc: firebase.firestore.QueryDocumentSnapshot<
      firebase.firestore.DocumentData
    >
  ) {
    const userDoc = await db
      .collection('users')
      .doc(lobbyDoc.data().owner)
      .get();
    const owner = userDoc.data()?.displayName ?? '<UNKNOWN>';
    return { id: lobbyDoc.id, owner };
  }

  const getLobbies = useCallback(
    async (
      snapshot: firebase.firestore.QuerySnapshot<
        firebase.firestore.DocumentData
      >
    ) => Promise.all(snapshot.docs.map((lobbyDoc) => formatLobbyDoc(lobbyDoc))),
    []
  );

  useEffect(() => {
    const unsubscribe = db.collection('lobbies').onSnapshot((snapshot) => {
      getLobbies(snapshot).then((formattedLobbies) => {
        setLobbies(formattedLobbies);
        if (isFetching) setIsFetching(false);
      });
    });

    return () => {
      unsubscribe();
    };
  }, [getLobbies, isFetching]);

  return { isFetching, lobbies };
};

export default useLobbies;
