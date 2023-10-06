import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import axios from 'axios'
import { BASE_URL } from '../constants'
import { LinkContainer } from 'react-router-bootstrap'

const defaultTheme = createTheme()

export default function SignUp () {
  const handleSubmit = async event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    let formObject = Object.fromEntries(data.entries())
    const userName = formObject.userName
    const email = formObject.email
    const password = formObject.password
    const confirmPassword = formObject.confirmPassword
    if (password !== confirmPassword) {
      alert('Please enter the same password')
    } else {
      await axios
        .post(`${BASE_URL}/api/users/register/`, {
          userName: userName,
          email: email,
          password: password
        })
        .then(response => response.data)
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name='userName'
                  required
                  fullWidth
                  label='User Name'
                  autoComplete='off'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label='Email Address'
                  name='email'
                  autoComplete='off'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='confirmPassword'
                  label='Confirm Password'
                  type='password'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <LinkContainer to={'/signin'}>
                  <Link variant='body2'>Already have an account? Sign in</Link>
                </LinkContainer>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
