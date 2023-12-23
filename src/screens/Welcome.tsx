import { Box, Text } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenNavigationType } from '@/navigation/types';
import { Button } from 'react-native';
import SafeAreaWrapper from '@/components/SafeAreaWrapper';

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  
  const navigatetoSignupScreen = () => {
    navigation.navigate("SignIn")
  }

  const navigatetoSignInScreen = () => {
    navigation.navigate("SignUp")
  }
  
  
  return (
    <SafeAreaWrapper>
    <Box>
      <Text>Welcome Screen</Text>
      <Button title="Navigate to sign in" onPress={navigatetoSignInScreen}/>
      <Button title="Navigate to sign up" onPress={navigatetoSignupScreen}/>
    </Box>
    </SafeAreaWrapper>
  )
}

export default WelcomeScreen