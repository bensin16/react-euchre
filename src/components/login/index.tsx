import React, { FC, useEffect, useState } from 'react';

import { Button, Error, Field } from 'components';

import { auth } from 'services';

import { validateEmail } from 'helpers';

const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [emailErr, setEmailErr] = useState<string | undefined>();
  const [password, setPassword] = useState<string>('');
  const [passwordErr, setPasswordErr] = useState<string | undefined>();
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [firebaseErr, setFirebaseErr] = useState<string | undefined>();

  useEffect(() => {
    setEmailErr(undefined);
    setPasswordErr(undefined);
  }, [email, password]);

  async function handleLogin() {
    if (email.length === 0) return setEmailErr('Email is required');
    if (!validateEmail(email)) return setEmailErr('Email must be valid');
    if (password.length === 0) return setPasswordErr('Password is required');

    setIsLoggingIn(true);

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      setFirebaseErr(err.message);
    } finally {
      setIsLoggingIn(false);
    }
  }

  return (
    <>
      <Field
        errMessage={emailErr}
        id="email"
        label="* Email"
        onChange={setEmail}
        placeholder="Enter Email Here"
        type="email"
        value={email}
      />
      <Field
        errMessage={passwordErr}
        id="password"
        label="* Password"
        onChange={setPassword}
        placeholder="Enter Password Here"
        type="password"
        value={password}
      />
      {firebaseErr && <Error>{firebaseErr}</Error>}
      <Button disabled={isLoggingIn} onClick={handleLogin}>
        Log{isLoggingIn ? 'ging ' : ''}in
      </Button>
    </>
  );
};

export default Login;
