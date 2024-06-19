import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';
import styled from 'styled-components';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <Error>{error}</Error>}
        <Input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  background: white;
  padding: 2rem;
padding: 2rem;
border-radius: 4px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.inputwidth: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid #ccc; border-radius: 4px;;

const Button = styled.buttonwidth: 100%; padding: 0.75rem; background: #333; color: white; border: none; border-radius: 4px; cursor: pointer; &:hover { background: #555; };

const Error = styled.pcolor: red; margin-bottom: 1rem;;

export default LoginPage;