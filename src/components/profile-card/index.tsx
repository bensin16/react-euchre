import React, { FC, useState } from 'react';

import { Button, Card, Login, Signup } from 'components';

import { useCurrentUser } from 'hooks';

import { useHistory } from 'react-router';

const ProfileCard: FC = () => {
  const history = useHistory();
  const user = useCurrentUser();

  const [showLogin, setShowLogin] = useState<boolean>(true);

  function goToProfile() {
    history.push('/u');
  }

  function goToLogin() {
    setShowLogin(true);
  }

  function goToSignUp() {
    setShowLogin(false);
  }

  //TODO: find a way to pass args in the onClick calls
  return (
    <Card>
      {user ? (
        <Button onClick={goToProfile}>View Profile</Button>
      ) : (
        <>
          {showLogin ? (
            <>
              <Login />
              <p>OR</p>
              <Button onClick={goToSignUp}>Switch to Sign Up instead</Button>
            </>
          ) : (
            <>
              <Signup />
              <p>Or</p>
              <Button onClick={goToLogin}>Switch to Log In instead</Button>
            </>
          )}
        </>
      )}
    </Card>
  );
};

export default ProfileCard;
