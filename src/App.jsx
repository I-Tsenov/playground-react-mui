import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import theme from './theme';
import AppRouter from './config/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRouter />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
