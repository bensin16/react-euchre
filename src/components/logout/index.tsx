import React, { FC, useState } from 'react';
import { Button, Error } from 'components';
import { auth } from 'services';

const Logout: FC = () => {
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
  const [firebaseErr, setFirebaseErr] = useState<string | undefined>(undefined);

  function handleClick() {
    setIsLoggingOut(true);
    setFirebaseErr(undefined);

    try {
      auth.signOut();
    } catch (err) {
      setFirebaseErr(err.message);
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <>
      <Button disabled={isLoggingOut} onClick={handleClick}>
        Log{isLoggingOut ? 'ging' : ''} Out
      </Button>
      {firebaseErr && <Error>{firebaseErr}</Error>}
    </>
  );
};

export default Logout;
