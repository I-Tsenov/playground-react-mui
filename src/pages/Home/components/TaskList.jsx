import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';

function TaskList({ todos, onToggleTodo, onDeleteTodo }) {
  const theme = useTheme();

  if (todos.length === 0) {
    return (
      <Paper
        elevation={1}
        sx={{
          p: 4,
          textAlign: 'center',
          backgroundColor: theme.palette.grey[50],
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
          }}
        >
          No tasks yet. Add one to get started! 🚀
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h3"
          sx={{
            mb: 0,
            color: theme.palette.primary.main,
          }}
        >
          Your Tasks
        </Typography>
      </Box>

      <Divider />

      <Box
        sx={{
          maxHeight: '400px',
          overflowY: 'auto',
          flex: 1,
          '&::-webkit-scrollbar': {
            width: '0.5rem',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.background.default,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.grey[300],
            borderRadius: '0.25rem',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
          },
          scrollbarColor: `${theme.palette.grey[300]} ${theme.palette.background.default}`,
          scrollbarWidth: 'thin',
        }}
      >
        <List sx={{ p: 0 }}>
          {todos.map((todo, index) => (
            <Box key={todo.id}>
              <ListItem
                sx={{
                  py: 2,
                  px: { xs: 2, sm: 3 },
                  backgroundColor: todo.completed
                    ? theme.palette.grey[50]
                    : 'transparent',
                  transition: 'background-color 0.2s ease',
                  '&:hover': {
                    backgroundColor: theme.palette.grey[100],
                  },
                }}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => onDeleteTodo(todo.id)}
                    size="small"
                    sx={{
                      color: theme.palette.error.main,
                      '&:hover': {
                        backgroundColor: `${theme.palette.error.main}15`,
                      },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemIcon
                  sx={{
                    minWidth: 'auto',
                    mr: 2,
                  }}
                >
                  <IconButton
                    edge="start"
                    size="small"
                    onClick={() => onToggleTodo(todo.id)}
                    sx={{
                      color: todo.completed
                        ? theme.palette.success.main
                        : theme.palette.grey[400],
                    }}
                  >
                    {todo.completed ? (
                      <CheckCircleIcon />
                    ) : (
                      <CheckCircleOutlineIcon />
                    )}
                  </IconButton>
                </ListItemIcon>
                <ListItemText
                  primary={todo.text}
                  sx={{
                    '& .MuiListItemText-primary': {
                      textDecoration: todo.completed
                        ? 'line-through'
                        : 'none',
                      color: todo.completed
                        ? theme.palette.text.secondary
                        : theme.palette.text.primary,
                      transition: 'all 0.2s ease',
                    },
                  }}
                />
              </ListItem>
              {index < todos.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Box>
    </Paper>
  );
}

export default TaskList;
