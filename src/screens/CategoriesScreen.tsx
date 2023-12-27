import SafeAreaWrapper from "@/components/shared/SafeAreaWrapper"
import Loader from "@/components/shared/loading";
import { fetcher } from "@/services/config";
import { ICategory } from "@/types";
import { Box, Text } from "@/utils/theme"
import { FlatList } from "react-native";
import  useSWR  from 'swr';
import Category from "@/components/categories/category";
import Createnewlist from "@/components/categories/create-new-list";


const CategoriesScreen = () => {
   const {data, error, isLoading } = useSWR<ICategory[]>("api/category/", fetcher, {
    refreshInterval: 1000,
  }) 

   const renderItem = ({ item }: {item: ICategory}) =>  (
      <Category category={item}/>
   )


   if (isLoading) {
    return  <Loader />
   }

  return (
    <SafeAreaWrapper>
    <Box flex={1} px="4">
      <Text variant="textXl" fontWeight="700" mb="10">Categories</Text>
      <FlatList 
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Box height={14}/>}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item._id}
    />
    <Createnewlist />
    </Box>
    </SafeAreaWrapper>
  )
}

export default CategoriesScreen