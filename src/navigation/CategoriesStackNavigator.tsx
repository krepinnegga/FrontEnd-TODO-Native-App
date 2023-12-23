import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CategoryStackParamList } from "./types"
import CategoriesScreen from "@/screens/CategoriesScreen"
import CategoryScreen from "@/screens/CategoryScreen"


const Stack = createNativeStackNavigator<CategoryStackParamList>()

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen 
        name="Categories"
        component={CategoriesScreen} 
        options={{
            headerShown: false
           }} 
       />
       <Stack.Screen 
         name="Category" 
         component={CategoryScreen}
         options={{
            headerShown: false
           }} 
       />
    </Stack.Navigator>
  )
}

export default CategoriesStackNavigator;