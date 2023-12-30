import { HomeScreenNavigationType } from "@/navigation/types"
import axiosInstance from "@/services/config"
import { ITask } from "@/types"
import {  Box, Text } from "@/utils/theme"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Pressable } from "react-native"
import useSWRMutation from "swr/mutation"

type TaskProps = {
  task: ITask
  mutateTasks?: () => Promise<ITask[] | undefined>
  color?: string
}

interface ITaskStatusRequest {
  id: string
  isCompleted: boolean
}

const toggleTaskStatusRequest = async ( url: string, { arg }: { arg: ITaskStatusRequest }
) => {
  try {
    await axiosInstance.put(url + "/" + arg.id, {
      ...arg,
    })
  } catch (error) {
    console.log("error in toggleTaskStatusRequest", error)
    throw error
  }
}



const Task = ({ task, color }: TaskProps) => {
  
  const navigation = useNavigation<HomeScreenNavigationType>()
  
  const { trigger } = useSWRMutation("api/tasks/update", toggleTaskStatusRequest)

  const toggleTaskStatus = async () => {
    try {
      const _updatedTask = {
        id: task._id,
        isCompleted: !task.isCompleted,
      }
      await trigger(_updatedTask)
    } catch (error) {
      console.log("error in toggleTaskStatus", error)
      throw error
    }
  }

  const navigateToEditTask = () => {
    navigation.navigate("EditTask", {
      task,
    })
  }

  return (
    <Pressable onPress={toggleTaskStatus} onLongPress={navigateToEditTask}>
    <Box
      p="4"
      bg="lightGray"
      borderRadius="rounded-5xl"
      flexDirection="row"
    >
     <Box flexDirection="row" alignItems="center">
       <Box 
         height={26} 
         width={26} 
         bg={task.isCompleted ? "gray9" : "gray300"} 
        //  style={{
        //   backgroundColor: task.isCompleted ? color : "#d4d4d8" || "#101928" ,
        //  }}
         borderRadius="rounded-xl"
         alignItems="center"
         justifyContent="center"
         >
          <Ionicons 
            name="ios-checkmark" 
            size={20} 
            color="white"
          />
       </Box>
       <Text ml="3.5" variant="textXl">
         {task.name}
       </Text>
     </Box>
     <Box>
      
     </Box>
    </Box>
   </Pressable>
  )
}

export default Task
