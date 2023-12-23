import { NavigatorScreenParams } from "@react-navigation/native"

export type AuthStackParamList = {
    Welcome: undefined
    SignIn: undefined
    SignUp: undefined
}

export type RootBottomTabParamList = {
    HomeStack: NavigatorScreenParams<HomeStackParamList>
    Today: undefined
    Completed: undefined
    CategoryStack: NavigatorScreenParams<CategoryStackParamList>
}

export type HomeStackParamList = {
    Home: undefined
    EditTask: undefined
}

export type CategoryStackParamList = {
    Categories: undefined
    Category:{
        id: string
    }
    CreateCategory: {
       id?: string
    } 
}

export type AppStackParamList = {
    Root: NavigatorScreenParams<RootBottomTabParamList>
    Setting: undefined
}

export type RootStackParamList = {
    AppStack:  NavigatorScreenParams<AppStackParamList>
    AuthStack: NavigatorScreenParams<AuthStackParamList>
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}