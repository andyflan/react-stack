import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h2 className="text-lg my-6 font-bold">Login</h2>
  
      <InputField
        name="email"
        label="Email"
        value={email}
        onChange={setEmail}

      />

      <InputField
        name="password"
        label="Password"
        value={password}
        onChange={setPassword}
      />

      <Button
        appearance="secondary"
        onClick={() => navigate('/')}
        className="mr-2"
      >Back to Dashboard</Button>

      <Button
        onClick={() => alert('Login!')}
      >Login</Button>
    </>  
  );
};