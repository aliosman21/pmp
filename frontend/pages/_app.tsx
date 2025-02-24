// filepath: /pages/_app.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  components: {
    MuiGrid: {
      defaultProps: {
        rowSpacing: 2
      }
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          paddingBottom: 25
        }
      }
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (!auth && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {router.pathname !== '/login' && <Navbar />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;