import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          28 de agosto, 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <FontAwesomeIcon icon={faSave} size="2x" />
          <Typography ml="2px">Save</Typography>
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          fullWidth
          placeholder="Day Title"
          label="Title"
          sx={{ border: 'none', mb: 1 }}
        />

        <TextField
          type="text"
          fullWidth
          multiline
          placeholder="What happen today?"
          minRows={5}
        />
      </Grid>
    </Grid>
  );
};
