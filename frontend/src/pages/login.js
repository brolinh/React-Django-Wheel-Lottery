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
import Alert from '@mui/material/Alert'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/reducers/users'
// import { useNavigate } from 'react-router-dom'

const defaultTheme = createTheme()

export default function SignIn () {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const userInfo = useSelector(state => state.users.loginedUserInfo)
  const [email_f, setEmail] = React.useState(false)
  const [password_f, setPassword] = React.useState(false)
  const handleSubmit = async event => {
    try {
      event.preventDefault()
      const data = new FormData(event.currentTarget)
      let formObject = Object.fromEntries(data.entries())
      const email = formObject.email
      const password = formObject.password

      if (email === '') setEmail(true)
      else setEmail(false)

      if (password === '') setPassword(true)
      else setPassword(false)

      if (email !== '' && password !== '') {
        dispatch(login({ email, password }))
      }
    } catch (error) {
      console.log(error)
    }
  }
//   React.useEffect(() => {
//     if (userInfo) navigate('/')
//   }, [userInfo])
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
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign In
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {email_f && (
              <Alert severity='warning'>
                Input Email
              </Alert>
            )}
            <TextField
              autoComplete='off'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoFocus
            />
            {password_f && (
              <Alert severity='warning'>
                Input Password
              </Alert>
            )}
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <LinkContainer to={'/signup'}>
                  <Link variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </LinkContainer>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
