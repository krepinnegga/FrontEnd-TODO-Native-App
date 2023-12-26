import { IUser } from "@/types"
import axiosInstance, { TODO_TOKEN_NAME, saveToken } from "./config"

type RegisterUserTypes = IUser

type LoginUserTypes = Omit<IUser, "name">

export const registerUser = async ({
    name,
    email,
    password,
  }: RegisterUserTypes) => {
    try {
      const res = await axiosInstance.post("api/user/create", {
        name,
        email,
        password, 
      })
      return res?.data.user
    } catch (error) {
      console.log("error in registerUser", error)
      throw error
    }
  }

  export const loginUser = async ({
    email,
    password,
  }: LoginUserTypes) => {
    try {
      const res = await axiosInstance.post("api/user/login", {
        email,
        password, 
      })
      const _token = res.data.token
      axiosInstance.defaults.headers.common["Authorization"] = _token;
      saveToken(TODO_TOKEN_NAME, _token)
      return res?.data.user
    } catch (error) {
      console.log("error in registerUser", error)
      throw error
    }
  }
