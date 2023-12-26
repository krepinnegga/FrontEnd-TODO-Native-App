import { IUser } from "@/types"
import axiosInstance from "./config"

type RegisterUserTypes = IUser

type LoginUserTypes = IUser

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
      return res?.data.user
    } catch (error) {
      console.log("error in registerUser", error)
      throw error
    }
  }
