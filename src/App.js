import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import Home from './views/Home';
import Footer from './components/Footer';

const theme = createTheme({
  typography: {
    fontFamily: 'Jost',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
