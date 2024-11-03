import React, { useState } from 'react';
import '../styles/Settings.scss'; // Importando o arquivo SCSS que vamos criar

const Settings: React.FC = () => {
    const [notificacoesHabilitadas, setNotificacoesHabilitadas] = useState(false);

  const handleMudancaNotificacao = () => {
    setNotificacoesHabilitadas(!notificacoesHabilitadas);
  };

  return (
    <div className="settings-container">
      <h1 className="settings-titulo">Configurações</h1>
      <div className="settings-item">
        <label>
          Habilitar Notificações:
          <input
              type="checkbox"
              checked={notificacoesHabilitadas}
              onChange={handleMudancaNotificacao}
          />
        </label>
      </div>
    </div>
  );
};

export default Settings;
