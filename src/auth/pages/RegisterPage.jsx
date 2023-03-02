import { Button, Grid, Typography, Link } from '@mui/material';
import TextField from '@mui/material/TextField/TextField';
import { AuthLayout } from '../layout/AuthLayout';
import { Link as RouterLink } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registration">
      <form>
        <Grid container gap={1} maxWidth={450}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="name"
              type="text"
              placeholder="Type your name here"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="mail"
              type="email"
              placeholder="example@mail.com"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="password"
              type="password"
              placeholder="123Abc"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="confirm password"
              type="password"
              placeholder="123Abc"
            />
          </Grid>
          <Grid container mt={1} justifyContent="start" gap={{ xs: 1, sm: 0 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Create account 🔥
              </Button>
              <Typography>You already have an account?</Typography>
              <Link component={RouterLink} to="/auth/login" color="inherit">
                Login
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
