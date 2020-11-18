import React, { FC, useEffect, useState } from 'react';

import { Button, Error as ErrComponent, Field } from 'components';
import { validateEmail } from 'helpers';
import { auth, db } from 'services';

const Signup: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [emailErr, setEmailErr] = useState<string | undefined>();
  const [password, setPassword] = useState<string>('');
  const [passwordErr, setPasswordErr] = useState<string | undefined>();
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [confirmPasswordErr, setConfirmPasswordErr] = useState<
    string | undefined
  >();
  const [firebaseErr, setFirebaseErr] = useState<string | undefined>();
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);

  useEffect(() => {
    setEmailErr(undefined);
    setPasswordErr(undefined);
    setConfirmPasswordErr(undefined);
    setFirebaseErr(undefined);
  }, [email, password, confirmPassword]);

  async function handleSignup() {
    if (email.length === 0) return setEmailErr('Email is required');
    if (!validateEmail(email)) return setEmailErr('Email must be valid');
    if (password.length === 0) return setPasswordErr('Password is required');
    if (password.length > 6)
      return setPasswordErr('Password must be at least 6 characters');
    if (confirmPassword.length === 0)
      return setConfirmPasswordErr('Password confirmation is required');

    if (password !== confirmPassword) {
      return setConfirmPasswordErr('Passwords must match');
    }

    setIsSigningUp(true);

    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!response.user) throw new Error('Something went wrong');

      await db
        .collection('users')
        .doc(response.user.uid)
        .set({
          displayName: response.user.email?.split('@')[0] ?? '<UNKNOWN>',
        });
    } catch (ex) {
      setFirebaseErr(ex.message);
      setIsSigningUp(false);
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
      <Field
        errMessage={confirmPasswordErr}
        id="confirm-password"
        label="* Confirm Password"
        onChange={setConfirmPassword}
        placeholder="Confirm Password Here"
        type="password"
        value={confirmPassword}
      />
      {firebaseErr && <ErrComponent>{firebaseErr}</ErrComponent>}
      <Button disabled={isSigningUp} onClick={handleSignup}>
        Sign{isSigningUp ? 'ing' : ''} Up
      </Button>
    </>
  );
};

export default Signup;
