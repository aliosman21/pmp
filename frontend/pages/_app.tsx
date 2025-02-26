// filepath: /pages/_app.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
          overflow: "scroll",
          scrollbarWidth: "none",
          paddingBottom: 48
        }
      }
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (!auth && router.pathname !== '/login') {
      localStorage.setItem('redirectAfterLogin', router.asPath);
      router.push('/login');
    } else {
      setAuthChecked(true);
    }
  }, [router]);
  if (!authChecked && router.pathname !== '/login') {
    return null; // or a loading spinner
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {router.pathname !== '/login' && <Navbar />}
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;