import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title = '' }) => {
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
        sm={6}
        sx={{
          boxShadow: '2px 2px 12px black',
          backgroundColor: 'whitesmoke',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Grid container marginTop={3} marginBottom={1}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};
