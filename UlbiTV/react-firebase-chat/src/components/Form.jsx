import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

export const Form = ({username, setUsername, handleSubmit, password, setPassword, error}) => {
  return (
    <form onSubmit={handleSubmit}>
        <TextField
          label="Логин"
          variant="outlined"
          color='secondary'
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Пароль"
          type="password"
          variant="outlined"
          color='secondary'
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
        type="submit" 
        variant="contained"  
        fullWidth
        sx={{
          background: 'rgb(169, 169, 218)'
        }}
        >
          Войти
        </Button>
      </form>
  );
}
