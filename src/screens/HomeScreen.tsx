import Loader from "@/components/shared/loading"
import SafeAreaWrapper from "@/components/shared/SafeAreaWrapper"
import Task from "@/components/tasks/task"
import TaskActions from "@/components/tasks/task-actions"
import { fetcher } from "@/services/config"
import useUserGlobalStore from "@/store/useUserGlobalStore"
import { ICategory, ITask } from "@/types"
import { AnimatedText, Box, Text } from "@/utils/theme"
import { format } from "date-fns"
import { FlatList } from "react-native"
import { getGreeting } from "@/utils/helpers/helpers"

import useSWR from "swr"
import { ZoomInEasyDown } from 'react-native-reanimated';

const today = new Date()

const greeting = getGreeting({ hour: new Date().getHours() })

const HomeScreen = () => {
  const { user } = useUserGlobalStore()

  const {
    data: tasks,
    isLoading,
    mutate: mutateTasks,
  } = useSWR<ITask[]>("api/tasks/", fetcher, {
    refreshInterval: 1000
  })

  if (isLoading || !tasks) {
    return <Loader />
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
         <AnimatedText
          fontWeight="500"
          variant="textXl"
          entering={ZoomInEasyDown.delay(500).duration(700)}
         > 
           Good {greeting} {user?.name}
         </AnimatedText>
        <Text  fontWeight="500">
          It’s {format(today, "eeee, LLL dd")} - {tasks.length} tasks
        </Text>
        <Box height={26} />
        <TaskActions categoryId="" />
        <Box height={26} />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task task={item} mutateTasks={mutateTasks} />
          )}
          ItemSeparatorComponent={() => <Box height={14} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
        />
      </Box>
    </SafeAreaWrapper>
  )
}

export default HomeScreen
