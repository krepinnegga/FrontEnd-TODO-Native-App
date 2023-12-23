import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native"
import SafeAreaWrapper from '@/components/SafeAreaWrapper';

const SignUpScreen = () => {
   
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();

  const navigatetoSignInScreen = () => {
    navigation.navigate("SignIn")
  }

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Sign Up Screen</Text>
        <Button title="Navigate to sign in" onPress={navigatetoSignInScreen} />
      </Box>
    </SafeAreaWrapper>
  )
}

export default SignUpScreen