import React from 'react';
import MUIButton from '../components/MUIButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.scss'; // Certifique-se de que o caminho está correto

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <AppBar position="static" className="dashboard-header">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <div className="navigation-buttons">
            <Button color="inherit" onClick={() => navigate('/home')}>Home</Button>
            <Button color="inherit" onClick={() => navigate('/settings')}>Settings</Button>
            <Button color="inherit" onClick={() => navigate('/signin')}>Sign In</Button>
            <Button color="inherit" onClick={() => navigate('/signup')}>Sign Up</Button>
            <Button color="inherit" onClick={() => navigate('/form')}>Form</Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className="main-content">
        <MUIButton />
      </div>
    </div>
  );
};

export default Dashboard;
