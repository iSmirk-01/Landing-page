"use client"
import { createContext, useContext, useState } from "react"

const UserContext = createContext()

export function UserProvider({ children }) {
    const [userData, setUserData] = useState({
        id: "",
        username: "",
        token: "",
    })

  return (
    <UserContext.Provider value={{userData, setUserData}}>
        {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
