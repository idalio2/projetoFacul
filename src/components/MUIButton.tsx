import React from 'react';
import Button from '@mui/material/Button'; 

const MUIButton: React.FC = () => {
  const handleClick = () => {
    console.log('Clicado!');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Clique-me
    </Button>
  );
};

export default MUIButton;
