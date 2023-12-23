import { ThemeProvider } from '@shopify/restyle';
import theme from '@/utils/theme';
import Navigation from '@/navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import useUserGlobalStore from './src/store/useUserGlobalStore';


export default function App() {
  const {user, updateUser} = useUserGlobalStore()
  
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}


