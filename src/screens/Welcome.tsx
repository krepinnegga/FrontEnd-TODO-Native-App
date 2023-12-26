import { Box, Text } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenNavigationType } from '@/navigation/types';
import { Image } from 'react-native';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '@/components/shared/button';

const Todo_Image= "https://logos.flamingtext.com/City-Logos/Todo-Logo.png";

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
      <LinearGradient
        colors={[
          "#ffffff",
        //  "#fcecff",
        //  "#f8daff",
        //  "#fae2ff",
        //  "#fae2ff",
           "#ffffff",
        ]}
        style={{ flex: 1 }}
       >
      <Box flex={1} justifyContent="center">
         <Box alignItems="center" mb='3.5'>
           <Image source={{
             uri: Todo_Image,
             width: 220,
             height: 120,
           }}
           />
         </Box>

          <Text textAlign='center' variant='textXl' fontWeight='700'>
            Do you want to be more productive?
          </Text>
          <Box mt='3.5' mx="10">
            <Button 
              lable='Start your journey'
              onPress={navigatetoSignInScreen}
            />
          </Box>
          <Text textAlign='center' variant='textXs' color='gray5' mt='3.5' fontWeight='700'>
             26,698 registered today
          </Text>
        </Box>
      </LinearGradient>    
    </SafeAreaWrapper>
  )
}

export default WelcomeScreen