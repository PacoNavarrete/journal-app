import { Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views/NothingSelectedView';

export const JournalPage = () => {
  return (
    <JournalLayout>
      <Typography variant="h5">Journal Page</Typography>
      <Typography>
        Exercitation cillum irure elit consectetur, Exercitation cillum irure
        elit consectetur.
      </Typography>

      <NothingSelectedView />
    </JournalLayout>
  );
};
