import React from 'react';
import { Container, Grid, CssBaseline, Box } from '@mui/material';
import LoginForm from './components/LoginForm'
import BackgroundSlider from './components/BakcgroundSlider';

export default function Login () {
  return (
    <>
      <CssBaseline />
      <BackgroundSlider />
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '30%',
          zIndex: 1,
        }}
      >
        <LoginForm />
      </div>
    </>
  );
}

