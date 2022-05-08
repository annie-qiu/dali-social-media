import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Button, DarkMode } from '@chakra-ui/react';
import { auth } from '../../services/firebase';

function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <DarkMode>
      <Button type="button" fontWeight={400} onClick={handleSignOut}>Sign Out</Button>
    </DarkMode>
  );
}

export default SignOut;
