import { Grid, Typography, TextField } from '@mui/material';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 4,
      }}
    >
      <Grid
        item
        xs={3}
        sx={{
          boxShadow: '2px 2px 2px black',
          backgroundColor: '#fff',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          LOGIN
        </Typography>
        <form>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                label="mail"
                type="email"
                placeholder="example@mail.com"
              />
            </Grid>
            <Grid item>
              <TextField
                label="password"
                type="password"
                placeholder="123Abc"
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
