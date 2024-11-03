import React, { useState } from 'react';
import '../styles/SignUp.scss'; 

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do usuário:', formData);
  };

  return (
    <div className="form">
            <form onSubmit={handleSubmit} className="signup-form">
      <h1 className="signup-titulo">Cadastrar Usuário</h1>
      <div className="form-grupo">
        <input
            type="text"
            name="username"
            placeholder="Nome de usuário"
            value={formData.username}
            onChange={handleChange}
            className="input-campo"
        />
      </div>
      <div className="form-grupo">
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-campo"
        />
      </div>
      <div className="form-grupo">
        <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}   
            onChange={handleChange}
            className="input-campo"
        />
      </div>
      <button type="submit" className="signup-button">Cadastrar</button>
    </form>

    </div>

  );
};

export default SignUp;
