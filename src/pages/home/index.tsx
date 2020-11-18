import React, { FC } from 'react';

import { ProfileCard } from 'components';

//will remove this import once i make lobby card and chat card
import { Card } from 'components';

const Home: FC = () => {
  return (
    <>
      <ProfileCard />
      <Card>live lobbies</Card>
      <Card>chat</Card>
    </>
  );
};

export default Home;
