import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Hero() {
  const theme = useTheme();

  return (
    <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
      <Typography
        variant="h1"
        sx={{
          mb: 2,
          color: theme.palette.primary.main,
          fontWeight: 700,
        }}
      >
        Welcome to Your Task Manager
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.secondary,
          fontSize: { xs: '1rem', sm: '1.125rem' },
          maxWidth: '600px',
          mx: 'auto',
        }}
      >
        Stay organized and boost your productivity with a simple, elegant to-do list.
        Add tasks, track progress, and accomplish your goals.
      </Typography>
    </Box>
  );
}

export default Hero;
