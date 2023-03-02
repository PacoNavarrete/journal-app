import { AppRouter } from './router/AppRouter';
import { JournalTheme } from './theme/JournalTheme';

export const JournalApp = () => {
  return (
    <JournalTheme>
      <AppRouter />
    </JournalTheme>
  );
};
