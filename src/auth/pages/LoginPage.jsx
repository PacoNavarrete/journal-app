import { Grid, Typography, TextField, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container gap={1} maxWidth={450}>
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
          <Grid
            container
            mt={1}
            justifyContent="space-around"
            gap={{ xs: 1, sm: 0 }}
          >
            <Grid item xs={12} sm={6} paddingRight={{ sm: 0.5 }}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} paddingLeft={{ sm: 0.5 }}>
              <Button variant="contained" fullWidth>
                <Typography>Google</Typography>
              </Button>
            </Grid>
            <Grid container justifyContent="end" marginTop={1}>
              <Link component={RouterLink} to="/auth/register" color="inherit">
                Create an account 🔥
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
