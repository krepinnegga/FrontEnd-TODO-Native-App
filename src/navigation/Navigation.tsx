import { NavigationContainer } from '@react-navigation/native'
import AuthStackNavigator from './AuthStackNavigator'
import AppStackNavigator from './AppStackNavigator'
import useUserGlobalStore from '@/store/useUserGlobalStore'
import { useEffect } from 'react'

const Navigation = () => {
  const { user } = useUserGlobalStore()
  

  return (
    <NavigationContainer>
       {user ?  <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  )
}

export default Navigation