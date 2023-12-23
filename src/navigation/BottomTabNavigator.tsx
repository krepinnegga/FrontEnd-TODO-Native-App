import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootBottomTabParamList } from './types'
import HomeStackNavigator from './HomeStackNavigator'
import CompletedScreen from '@/screens/CompletedScreen'
import TodayScreen from '@/screens/TodayScreen'
import CategoriesStackNavigator from './CategoriesStackNavigator'
import Icons from '@/components/shared/icons'
import { useTheme } from '@shopify/restyle'

const Tab = createBottomTabNavigator<RootBottomTabParamList>()

const BottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: theme.colors.gray550,
        tabBarHideOnKeyboard: true,

      }}
    >
        <Tab.Screen
          name="HomeStack"
          component={HomeStackNavigator}
          options={() => ({
            title: "Home",
            tabBarIcon: ({color}) => <Icons name="home" color={color} />,
            headerShown: false
          })}
        />
         <Tab.Screen
          name="Completed"
          component={CompletedScreen}
          options={() => ({
            title: "Completed",
            tabBarIcon: ({color}) => <Icons name="completed" color={color} />,
            headerShown: false
          })}
        />

        <Tab.Screen
          name="Today"
          component={TodayScreen}
          options={() => ({
            title: "Today",
            tabBarIcon: ({color}) => <Icons name="calendar" color={color} />,
            headerShown: false
          })}
        />

        <Tab.Screen
          name="CategoryStack"
          component={CategoriesStackNavigator}
          options={() => ({
            title: "Category",
            tabBarIcon: ({color}) => <Icons name="categories" color={color} />,
            headerShown: false
          })}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator