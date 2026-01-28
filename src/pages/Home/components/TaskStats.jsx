import { Box, Chip } from '@mui/material';

function TaskStats({ todos }) {
  if (todos.length === 0) return null;

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <Chip
        label={`Total Tasks: ${todos.length}`}
        variant="outlined"
        color="primary"
      />
      <Chip
        label={`Completed: ${completedCount}`}
        variant="outlined"
        color="success"
      />
      <Chip
        label={`Remaining: ${todos.length - completedCount}`}
        variant="outlined"
        color="warning"
      />
    </Box>
  );
}

export default TaskStats;
