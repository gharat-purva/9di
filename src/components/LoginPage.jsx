import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Checkbox, FormControlLabel, IconButton, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowForward from '@mui/icons-material/ArrowForward';
import logo from '../assets/digitalipsum.png'; 

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Stay Logged In:', stayLoggedIn);
    navigate('/knowledge-base');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#181c35',
        color: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 2,
          width: '100%',
          borderBottom: '1px solid #30344f',
          pb: 1,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={logo} alt="Digital Ipsum" style={{ height: '40px', marginRight: '10px' }} />
          <Typography variant="h6" component="span">
            Digital Ipsum
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '400px',
          backgroundColor: '#181c35',
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5">
          Log In
        </Typography>
        
        <Typography variant="body2" color="#99a1b3" sx={{ alignSelf: 'flex-start', mt: 2 }}>
          Email Address
        </Typography>
        <TextField
          fullWidth
          placeholder="Email Address"
          required
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            '& fieldset': {
              borderColor: '#30344f',
            },
            '& input::placeholder': {
              color: '#99a1b3',
              opacity: 1,
            },
            '& input': {
              color: '#99a1b3',
            },
            borderRadius: 1,
          }}
        />
        <Typography variant="body2" color="#99a1b3" sx={{ alignSelf: 'flex-start', mt: 1 }}>
          Password
        </Typography>
        <TextField
          label="Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            '& fieldset': {
              borderColor: '#30344f',
            },
            '& input::placeholder': {
              color: '#99a1b3',
              opacity: 1,
            },
            '& input': {
              color: '#99a1b3',
            },
            borderRadius: 1,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end" sx={{ color: '#99a1b3', border: '1px solid #30344f', borderRadius: '4px', p: 1.9 }}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            sx: {
              color: '#99a1b3',
            },
          }}
        />
         <Button
          sx={{ alignSelf: 'flex-start', color: 'white', textTransform: 'none', fontSize: '0.875rem', textDecoration: 'underline' }}
          onClick={() => navigate('/forgot-password')}
        >
          Forgot your password?
        </Button>
        <FormControlLabel
          control={
            <Checkbox
              checked={stayLoggedIn}
              onChange={(e) => setStayLoggedIn(e.target.checked)}
              sx={{ color: 'white' }}
            />
          }
          label="Stay logged in"
          sx={{ alignSelf: 'flex-start', color: 'white' }}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{ mt: 2, backgroundColor: 'white', color: '#181c35', textTransform: 'none', '&:hover': { backgroundColor: 'white' } }}
        >
          Log In
          <ArrowForward sx={{ ml: 1 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
