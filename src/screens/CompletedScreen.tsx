import Loader from "@/components/shared/loading"
import NavigateBack from "@/components/shared/navigateBack"
import SafeAreaWrapper from "@/components/shared/SafeAreaWrapper"
import Task from "@/components/tasks/task"
import  { fetcher } from "@/services/config"
import {  ITask } from "@/types"
import { Box, Text } from "@/utils/theme"
import { FlatList } from "react-native"
import useSWR from "swr"



const CompletedScreen = () => {
 
  
  // const { data: category, isLoading: isLoadingCategory } = useSWR<ICategory>(
  //   `api/category/`,
  //   fetcher
  // )

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    mutate: mutateTasks,
  } = useSWR<ITask[]>(`/api/tasks/completed`, fetcher, {
    refreshInterval: 1000,
  })

  if (isLoadingTasks ||  !tasks) {
    return <Loader />
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        {/* <Box width={40}>
          <NavigateBack />
        </Box> */}
        <Box height={16} />
        <Box flexDirection="row">
          <Text
            variant="textXl"
            fontWeight="700"
            ml="3"
          >
           Completed
          </Text>
        </Box>
        <Box height={16} />
       
        <FlatList 
          data={tasks}
          renderItem={({ item, index }) => {
            return <Task task={item} mutateTasks={mutateTasks}
                  //  color={category?.color?.code}
                   />
          }}
          ItemSeparatorComponent={() => <Box height={14}/>}
          keyExtractor={(item) => item._id}
        />
      </Box>
    </SafeAreaWrapper>
  )
}

export default CompletedScreen
