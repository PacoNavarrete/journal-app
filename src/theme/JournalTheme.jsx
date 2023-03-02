import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { darkTheme } from './darkTheme';

export const JournalTheme = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
