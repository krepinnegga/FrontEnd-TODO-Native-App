import { ThemeProvider } from '@shopify/restyle';
import theme, {Text} from '@/utils/theme';
import Navigation from '@/navigation/Navigation';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}


