import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import Input from "@/components/shared/input";
import Button from "@/components/shared/button";
import { Image, Pressable } from "react-native";

const Todo_Image= "https://logos.flamingtext.com/City-Logos/Todo-Logo.png";

const SignInScreen = () => {
   
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();

  const navigatetoSignUpScreen = () => {
    navigation.navigate("SignUp")
  }

  return (
    <SafeAreaWrapper>
     
    <Box flex={1} px="10" justifyContent="center">
      <Box alignItems="center">
      <Image source={{
          uri: Todo_Image,
          width: 220,
          height: 120,
         }} />
      </Box>
      <Text variant="textXl" fontWeight="700">Welcome Back, Task Planer!</Text>
      <Box  mb="6"/>
      <Input label="Email"/>
      <Box  mb="6"/>
      <Input label="Password"/>
      <Box  mt="6"/>
      <Pressable onPress={navigatetoSignUpScreen}>
        <Text color="red800" textAlign="right">Dont have an account? Sign Up</Text>
      </Pressable>
      <Box  mt="5.5"/>
      <Button lable="Login"  uppercase />
    </Box>
    </SafeAreaWrapper>
  )
}

export default SignInScreen



