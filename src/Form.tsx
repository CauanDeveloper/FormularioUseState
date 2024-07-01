// src/Form.js
import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const validate = () => {
    let valid = true;
    const newErrors = { nome: '', email: '', telefone: '' };

    // Validação do nome
    if (formData.nome.trim().length < 2) {
      newErrors.nome = 'Nome deve ter pelo menos 2 caracteres.';
      valid = false;
    }

    // Validação do email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Email inválido.';
      valid = false;
    }

    // Validação do telefone
    const telefonePattern = /^\d{10,11}$/;
    if (!telefonePattern.test(formData.telefone)) {
      newErrors.telefone = 'Telefone deve ter 10 ou 11 dígitos.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Formulário de Contato</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          {errors.nome && <span className="error">{errors.nome}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
          {errors.telefone && <span className="error">{errors.telefone}</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
