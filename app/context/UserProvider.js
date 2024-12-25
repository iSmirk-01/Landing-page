"use client"
import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"

const UserContext = createContext()

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    id: "",
    username: "",
    isLoggedIn: false
  })
  
useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    return;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${apiUrl}/auth/current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { username, id } = res.data;

      setUserData((prev) => ({
        ...prev,
        isLoggedIn: true,
        username,
        id: id,
      }));
    } catch (err) {
      console.error("Error fetching user data:", err.response || err.message);
      if (err.response && err.response.status === 401) {
              setUserData((prev) => ({
                ...prev,
                isLoggedIn: false,
                username: "",
                id: "",
              }));
        localStorage.removeItem("token");
      }
    }
  };

  fetchUser();
}, []);


  return (
    <UserContext.Provider value={{userData, setUserData}}>
        {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
