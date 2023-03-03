import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Typography variant="h6">Menu</Typography>
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            {' '}
            JournalApp{' '}
          </Typography>

          <IconButton color="error">
            <Typography variant="h6">Logout</Typography>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
