import { Box } from '@mui/material';
import { NavBar } from '../component/NavBar';
import { SideBar } from '../component/SideBar';

export const JournalLayout = ({ children }) => {
  const drawerWidth = 280;

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};
