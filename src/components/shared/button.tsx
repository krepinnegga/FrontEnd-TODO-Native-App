import { Box, Text } from '@/utils/theme'
import { Pressable } from 'react-native'

type ButtonProps = {
  lable: string
  onPress?: () => void
  onLongPress?: () => void
  disabled?: boolean
  uppercase?: boolean
}

const Button = ({lable, onPress, onLongPress, disabled, uppercase}: ButtonProps) => {
  return (
   <Pressable
     onPress={onPress}
     onLongPress={onLongPress}
     disabled={disabled}
   >
    <Box bg={disabled ? "gray800" : "red800"} py='5' borderRadius='rounded-7xl'>
       <Text 
        variant='textXs' 
        fontWeight='700'
        textAlign="center" 
        color='white'
        textTransform={uppercase ? "uppercase" : "none"}
       >
        {lable}
       </Text>
    </Box>
   </Pressable>
  )
}

export default Button
