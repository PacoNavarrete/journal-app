import { Box } from '@mui/material';
import { NavBar } from '../component/NavBar';

export const JournalLayout = ({ children }) => {
  const drawerWidth = 280;

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth} />

      {/* place sidebar here */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};
