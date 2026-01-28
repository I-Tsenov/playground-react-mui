import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4A90A4",
      light: "#6BA3B5",
      dark: "#2D5A70",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#6BA490",
      light: "#8DBAA8",
      dark: "#4A7A6B",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2E7D32",
      light: "#4CAF50",
      dark: "#1B5E20",
      contrastText: "#ffffff",
    },
    error: {
      main: "#C62828",
      light: "#E53935",
      dark: "#B71C1C",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#F57C00",
      light: "#FB8C00",
      dark: "#E65100",
      contrastText: "#ffffff",
    },
    info: {
      main: "#4A90A4",
      light: "#6BA3B5",
      dark: "#2D5A70",
      contrastText: "#ffffff",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#616161",
      disabled: "#BDBDBD",
    },
    divider: "#E0E0E0",
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.3,
      "@media (min-width:600px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.75rem",
      },
    },
    body1: {
      fontSize: "0.9375rem",
      lineHeight: 1.6,
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "0.8125rem",
      lineHeight: 1.5,
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
  },
  shape: {
    borderRadius: 0.5,
  },
  spacing: 8,
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1264,
    xl: 1920,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          minHeight: "2.75rem",
          minWidth: "2.75rem",
          "@media (min-width:960px)": {
            minHeight: "2.5rem",
            minWidth: "2.5rem",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          margin: "0.5rem",
          "@media (min-width:600px)": {
            margin: "1rem",
          },
          "@media (min-width:960px)": {
            margin: "1.5rem",
          },
        },
      },
    },
  },
});

export default theme;
