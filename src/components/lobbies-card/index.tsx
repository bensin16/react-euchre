import React, { FC } from 'react';

//import { useHistory } from 'react-router-dom';

import { Card } from 'components';

import { useLobbies } from 'hooks';

const LobbiesCard: FC = () => {
  const { isFetching, lobbies } = useLobbies();

  // TODO: make styled h1 tag centered and stuff
  if (isFetching) return <h1>Fetching Rooms...</h1>;
  if (lobbies.length === 0) return <h1>No Lobbies Found</h1>;

  return (
    <Card>
      <h1>Lobbies</h1>
      {lobbies.map((lobby) => (
        <div key={lobby.id} onClick={() => alert(lobby.id)}>
          {lobby.id} = {lobby.owner}
        </div>
      ))}
    </Card>
  );
};

export default LobbiesCard;
