import { useForm } from '../../hooks/useForm';
import { useDispatch } from "react-redux";
import { startChekingAuth, startGoogleSigIn } from "../../store/auth/thunks"

import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

function MailInput({email, onInputChange}) {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="mail"
        type="email"
        placeholder="example@mail.com"
        name='email'
        value={email}
        onChange={onInputChange}
      />
    </Grid>
  )
}

function PassWordInput({password, onInputChange}) {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="password"
        type="password"
        placeholder="12345678"
        name='password'
        value={password}
        onChange={onInputChange}
      />
    </Grid>
  )
}

function LoginButton({ submit }) {  
  return (
  <Grid item xs={12} sm={6} paddingRight={{ sm: 0.5 }}>
    <Button type='submit' onSubmit={submit} variant="contained" fullWidth>
      Login
    </Button>
  </Grid>
  )
}

function GoogleButton() {
  const dispatch = useDispatch();
  
  function onGoogleSubmit() {
    dispatch( startGoogleSigIn() )
    console.log( "go sign in with google" )

  }
  return (
    <Grid item xs={12} sm={6} paddingLeft={{ sm: 0.5 }}>
      <Button onClick={onGoogleSubmit} variant="contained" fullWidth>
        <Typography>Google</Typography>
      </Button> 
    </Grid>
  )
}

function CreateAccount() {
  return (
    <Grid container justifyContent="end" marginTop={1}>
      <Link component={RouterLink} to="/auth/register" color="inherit">
        Create an account 🔥
      </Link>
    </Grid>
  )
}

export const LoginPage = () => {
  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm({
    email: "yourname@mail.com",
    password: "12345678"
  })

  function onSubmit(event) {
    event.preventDefault()
    dispatch(startChekingAuth())
    console.log({email, password})
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container gap={1} maxWidth={450}>
          <MailInput email={email} onInputChange={onInputChange} />
          <PassWordInput password={password} onInputChange={onInputChange} />
          <Grid
            container
            mt={1}
            justifyContent="space-around"
            gap={{ xs: 1, sm: 0 }}
          >
            <LoginButton submit={onSubmit}/>
            <GoogleButton />
          </Grid>
          <CreateAccount />
        </Grid>
      </form>
    </AuthLayout>
  );
};
