import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function NotFound() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[100]} 100%)`,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              fontSize: { xs: "4rem", sm: "6rem" },
              fontWeight: 700,
              color: theme.palette.primary.main,
            }}
          >
            404
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: theme.palette.text.primary,
            }}
          >
            Page Not Found
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: theme.palette.text.secondary,
              fontSize: "1.125rem",
            }}
          >
            Sorry, the page you're looking for doesn't exist. Let's get you back
            on track.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/")}
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
