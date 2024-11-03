import React, { useState } from 'react';
import '../styles/Form.scss'; 

interface FormData {
  name: string;
  email: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="total">
            <form onSubmit={handleSubmit} className="form-container">
      <h1 className="form-titulo">Formulário</h1>
      <div className="input-grupo">
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-campo"
          />
        </label>
      </div>
      <div className="input-grupo">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-campo"
          />
        </label>
      </div>
      <button type="submit" className="submit-button">Enviar</button>
    </form>

    </div>

  );
};

export default Form;

