import { CategoriesNavigationType } from "@/navigation/types"
import { Box, Text, Theme } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import {Feather} from "@expo/vector-icons"
import { Pressable } from "react-native"
import { useTheme } from '@shopify/restyle';

const Createnewlist = () => {
    const navigation = useNavigation<CategoriesNavigationType>()
    const theme = useTheme<Theme>()

    const navigatetoCreateCategory = () => {
        navigation.navigate("CreateCategory", {});
    }

  return (
    <Pressable onPress={navigatetoCreateCategory}>
      <Box p="4" bg="lightGray" borderRadius="rounded-5xl" flexDirection="row" alignItems="center">
        <Feather name="plus" size={24} color={theme.colors.gray500}/>
        <Text variant="textXl" fontWeight="600" color="gray650" ml="6">
           Create Category 
        </Text>
      </Box>
    </Pressable>
  )
}

export default Createnewlist