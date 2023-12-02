import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Snackbar from '@mui/material/Snackbar';
import { Spinner, Text } from '@chakra-ui/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [emailError, setEmailError] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Passed to backend successfully!');
        setFormData({ name: '', email: '', message: '' });
        setConfirmationOpen(true);
      }
    } catch (e) {
      console.error('Error submitting form:', e);
    }

    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'email' && validateEmail(e.target.value)) {
      setEmailError(false);
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleCloseConfirmation = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setConfirmationOpen(false);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          padding: '2rem',
          borderRadius: '20px',
          bgcolor: 'common.white',
        }}
      >
        <Typography
          variant='h4'
          gutterBottom
          sx={{ color: 'black', fontWeight: 700 }}
        >
          Like what you see? Send me a message!
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label='Name or Handle'
                variant='outlined'
                sx={{
                  width: '100%',
                  borderRadius: '10px',
                  '& .MuiInputLabel-root': {
                    color: 'black',
                    fontWeight: 'bold',
                  },
                }}
                value={formData.name}
                onChange={handleInputChange}
                required
                name='name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Email'
                variant='outlined'
                sx={{
                  width: '100%',
                  borderRadius: '10px',
                  '& .MuiInputLabel-root': {
                    color: 'black',
                    fontWeight: 'bold',
                  },
                }}
                value={formData.email}
                onChange={handleInputChange}
                required
                name='email'
                error={emailError}
                helperText={emailError ? 'Please enter a valid email' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Message'
                variant='outlined'
                multiline
                rows={4}
                sx={{
                  width: '100%',
                  borderRadius: '10px',
                  '& .MuiInputLabel-root': {
                    color: 'black',
                    fontWeight: 'bold',
                  },
                }}
                value={formData.message}
                onChange={handleInputChange}
                required
                name='message'
              />
            </Grid>
            <Grid item xs={12}>
              {isLoading ? (
                <div>
                  <Spinner
                    size='xl'
                    boxSize='50px'
                    thickness='4px'
                    color='#c749c1'
                  />
                  <Text sx={{ color: '#c749c1' }}>
                    Standby: Message is sending...
                  </Text>
                </div>
              ) : (
                <Button
                  variant='contained'
                  sx={{
                    width: '100%',
                    bgcolor: '#111827',
                    color: 'common.white',
                    '&:hover': {
                      bgcolor: 'common.white',
                      color: '#111827',
                    },
                  }}
                  size='large'
                  type='submit'
                >
                  Send Message
                  <MailOutlineIcon
                    fontSize='small'
                    sx={{ marginLeft: '5px' }}
                  />
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={confirmationOpen}
        autoHideDuration={6000}
        onClose={handleCloseConfirmation}
        message='Yay, you sent an email to me!'
        action={
          <Button
            color='inherit'
            size='small'
            onClick={handleCloseConfirmation}
          >
            Close
          </Button>
        }
      />
    </Container>
  );
};

export default ContactForm;
