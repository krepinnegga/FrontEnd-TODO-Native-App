import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native"
import SafeAreaWrapper from '@/components/SafeAreaWrapper';

const SignInScreen = () => {
   
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();

  const navigatetoSignupScreen = () => {
    navigation.navigate("SignUp")
  }

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Sign In Screen</Text>
        <Button title="Navigate to sign up" onPress={navigatetoSignupScreen} />
      </Box>
    </SafeAreaWrapper>
  )
}

export default SignInScreen