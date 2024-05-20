import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const LoginForm = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <TextField
        required
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        required
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2, mb: 2, width: '100%' }}
      >
        Sign In
      </Button>
    </Box>
  );
};

export default LoginForm;
