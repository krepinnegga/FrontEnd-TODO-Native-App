import { ReactNode } from "react"
import { SafeAreaView } from "react-native-safe-area-context"

type SafeAreaWrapperpros = {
    children: ReactNode
}

const SafeAreaWrapper = ({ children }: SafeAreaWrapperpros) => {
    return (
        <SafeAreaView
          style={{
            flex: 1,
            
          }}
        >
            {children}
        </SafeAreaView>
      )
}

export default SafeAreaWrapper