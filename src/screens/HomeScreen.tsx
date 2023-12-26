import { Box, Text } from "@/utils/theme"
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import useSWR from "swr"
import { fetcher } from "@/services/config";

const HomeScreen = () => {
  const { data, isLoading } = useSWR("api/category/", fetcher)
  console.log(`data`, JSON.stringify(data, null, 2))
  
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Home Screen</Text>
      </Box>
    </SafeAreaWrapper>
  )
}

export default HomeScreen