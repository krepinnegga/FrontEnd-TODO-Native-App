import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList } from './types'
import WelcomeScreen from '@/screens/Welcome'
import SignInScreen from '@/screens/SignInScreen';
import SignUpScreen from '@/screens/SignUpScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator