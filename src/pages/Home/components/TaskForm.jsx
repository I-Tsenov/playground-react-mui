import {
  Box,
  Paper,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function TaskForm({ input, setInput, onAddTask }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onAddTask();
    }
  };

  return (
    <Paper elevation={2} sx={{ p: { xs: 3, sm: 4 }, borderRadius: 2 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Add a New Task
      </Typography>

      <Stack spacing={2}>
        <TextField
          fullWidth
          placeholder="What do you need to do today?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          variant="outlined"
          size="medium"
          slotProps={{
            input: {
              sx: {
                fontSize: { xs: "0.9375rem", sm: "1rem" },
              },
            },
          }}
        />

        <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={onAddTask}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              px: { xs: 2, sm: 3 },
            }}
          >
            Add Task
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export default TaskForm;
