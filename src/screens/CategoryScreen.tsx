import Loader from "@/components/shared/loading"
import NavigateBack from "@/components/shared/navigateBack"
import SafeAreaWrapper from "@/components/shared/SafeAreaWrapper"
import Task from "@/components/tasks/task"
import TaskActions from "@/components/tasks/task-actions"
import { CategoryStackParamList } from "@/navigation/types"
import axiosInstance, { fetcher } from "@/services/config"
import { ICategory, ITask } from "@/types"
import { Box, Text } from "@/utils/theme"
import { RouteProp, useRoute } from "@react-navigation/native"
import React, { useEffect } from "react"
import { FlatList } from "react-native"
import useSWR from "swr"

type CategoryScreenRouteProp = RouteProp<CategoryStackParamList, "Category">

const CategoryScreen = () => {
  const route = useRoute<CategoryScreenRouteProp>()

  const { id } = route.params

  console.log(id)

  const { data: category, isLoading: isLoadingCategory } = useSWR<ICategory>(
    `/api/category/${id}`,
    fetcher
  )

  console.log(`category`, JSON.stringify(category, null, 2))

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    mutate: mutateTasks,
  } = useSWR<ITask[]>(`/api/tasks/tasks-by-categories/${id}`, fetcher, {
    refreshInterval: 1000,
  })

  if (isLoadingTasks || isLoadingCategory || !category || !tasks) {
    return <Loader />
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Box width={40}>
          <NavigateBack />
        </Box>
        <Box height={16} />
        <Box flexDirection="row">
          <Text variant="textXl" fontWeight="700">
            {category?.icon?.symbol}
          </Text>
          <Text
            variant="textXl"
            fontWeight="700"
            ml="3"
            style={{
              color: category?.color?.code,
            }}
          >
            {category?.name}
          </Text>
        </Box>
        <Box height={16} />
        <TaskActions categoryId={id}/>
        <Box height={16} />

        <FlatList 
          data={tasks}
          renderItem={({ item, index }) => {
            return <Task task={item} mutateTasks={mutateTasks}
                  //  color={category?.color?.code} 
                   />
          }}
          ItemSeparatorComponent={() => <Box height={14}/> }
        />
      </Box>
    </SafeAreaWrapper>
  )
}

export default CategoryScreen
