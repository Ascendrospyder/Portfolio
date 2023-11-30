import React from "react";
import { Container, Grid, TextField, Button, Paper } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const ContactForm = () => {
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
            <form>
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
                    required
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
                    required
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
                    required
                  />
                </Grid>
                <Grid item xs={12}>
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
                    Send Message <MailOutlineIcon fontSize='small' sx={{ marginLeft: '5px' }} />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
  )
}

export default ContactForm;