import { NavigationContainer } from '@react-navigation/native'
import AuthStackNavigator from './AuthStackNavigator'
import AppStackNavigator from './AppStackNavigator'
import useUserGlobalStore from '@/store/useUserGlobalStore'
import { useEffect } from 'react'

const Navigation = () => {
  const {user, updateUser} = useUserGlobalStore()
  
  console.log(`user`, JSON.stringify(user, null, 2))

  useEffect(() => {
    updateUser(null)
  }, [])

  return (
    <NavigationContainer>
       {user ?  <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  )
}

export default Navigation