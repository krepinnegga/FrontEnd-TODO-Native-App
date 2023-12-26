import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import Input from "@/components/shared/input";
import Button from "@/components/shared/button";
import { Image, Pressable } from "react-native";
import { Controller, useForm } from "react-hook-form"
import { IUser } from "@/types";
import { loginUser } from "@/services/api";
import useUserGlobalStore from '@/store/useUserGlobalStore';

const Todo_Image= "https://logos.flamingtext.com/City-Logos/Todo-Logo.png";

const SignInScreen = () => {
   
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();

  const navigatetoSignUpScreen = () => {
    navigation.navigate("SignUp")
  }

  const { updateUser } = useUserGlobalStore()

  const { control, handleSubmit,  formState: { errors } } = useForm<Omit<IUser, "name">>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: Omit<IUser, "name">) => {
    try {
      const {email, password} = data
     const _user =  await loginUser({
        email,
        password
      })
      updateUser({
        email: _user.email,
        name: _user.name
      })
    } catch (error) {
      
    }
  }

  return (
    <SafeAreaWrapper>
    <Box flex={1} px="5.5" justifyContent="center">
      <Box alignItems="center">
      <Image source={{
          uri: Todo_Image,
          width: 220,
          height: 120,
         }} />
      </Box>
      <Text variant="textXl" fontWeight="700">Welcome Back, Task Planer!</Text>
      <Box  mb="6"/>
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
      <Box  mb="6"/>
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
              error={errors.password}
              secureTextEntry
            />
          )}
          name="password"
        />
      <Box  mt="6"/>
      <Pressable onPress={navigatetoSignUpScreen}>
        <Text color="red800" textAlign="right">Dont have an account? Sign Up</Text>
      </Pressable>
      <Box  mt="5.5"/>
      <Button lable="Login" onPress={handleSubmit(onSubmit)}  uppercase />
    </Box>
    </SafeAreaWrapper>
  )
}

export default SignInScreen



