import React, { FC } from 'react';

import { LobbiesCard, ProfileCard } from 'components';

//will remove this import once i make lobby card and chat card
import { Card } from 'components';

const Home: FC = () => {
  return (
    <>
      <ProfileCard />
      <LobbiesCard />
      <Card>chat</Card>
    </>
  );
};

export default Home;
