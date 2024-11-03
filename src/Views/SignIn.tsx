import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import '../styles/SignIn.scss';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Login attempted with:', email, password);

   
    login();  
    navigate('/dashboard');  
  };

  return (
    <div className="geral">
            <form onSubmit={handleLogin} className="signin-form">
      <h1 className="signin-titulo">Login</h1>
      <div className="form-grupo">
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
      </div>
      <div className="form-grupo">
        <label>Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
      </div>
      <button type="submit" className="signin-button">Entrar</button>
    </form>

    </div>

  );
};

export default SignIn;

