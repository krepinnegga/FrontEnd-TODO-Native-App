import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import Button from "@/components/shared/button";
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import Input from "@/components/shared/input";
import {Image, Pressable } from "react-native";
import { Controller, useForm } from "react-hook-form"
import { IUser } from "@/types";
import { registerUser } from '../services/api';

const Todo_Image= "https://logos.flamingtext.com/City-Logos/Todo-Logo.png";

const SignUpScreen = () => {
   
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();

  
  const navigatetoSigninScreen = () => {
    navigation.navigate("SignIn")
  }

  const { control, handleSubmit,  formState: { errors } } = useForm<IUser>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: IUser) => {
    try {
      const {email, name, password} = data
      await registerUser({
        email,
        name,
        password
      })
      navigatetoSigninScreen()
    } catch (error) {
      
    }
  }

  return (
    <SafeAreaWrapper>
    <Box flex={1} px="5.5" mt="2">
    <Box alignItems="center">
      <Image source={{
          uri: Todo_Image,
          width: 220,
          height: 120,
         }} />
      </Box>
      <Text variant="textXl" fontWeight="700">Welcome Task Planer!</Text>
      <Text variant="textXl" mb="6" fontWeight="700">Your journey starts here</Text>
      <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Name"
              error={errors.name}
            />
          )}
          name="name"
        />
        <Box mb="6" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              error={errors.email}
            />
          )}
          name="email"
        />
        <Box mb="6" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              error={errors.name}
              secureTextEntry
            />
          )}
          name="password"
        />
       <Box  mt="6"/>
      <Pressable onPress={navigatetoSigninScreen}>
        <Text color="red800" textAlign="right">Already have an account? Log in</Text>
      </Pressable>
      <Box  mt="5.5"/>
      <Button lable="Register" onPress={handleSubmit(onSubmit)}  uppercase />
    </Box>
  </SafeAreaWrapper>
  )
}

export default SignUpScreen