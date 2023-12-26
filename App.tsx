import { ThemeProvider } from '@shopify/restyle';
import theme from '@/utils/theme';
import Navigation from '@/navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import useUserGlobalStore from './src/store/useUserGlobalStore';
import { useEffect } from 'react';


export default function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}


