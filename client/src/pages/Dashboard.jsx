/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react"
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom"
import {Navbar} from "../components"
import axios from 'axios'
import { toast } from "react-toastify"

const DashboardContext = React.createContext()

export const loader = async() => {
    try {
        const {data} = await axios.get('/api/v1/user/current-user')
        return data
    } catch (error) {
        return redirect('/')
    }
}

const Dashboard = () => {

  const {user} = useLoaderData()
  const navigate = useNavigate()

  const logoutUser = async() => {
    navigate('/')
    await axios.get('/api/v1/auth/logout')
    toast.success('Logging Out..')
  }

  return (
    <DashboardContext.Provider value={{
      user,
      logoutUser
    }}>
      <div className="w-full h-full relative">
          <Navbar {...user} />
          <Outlet />
      </div>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => {
  return useContext(DashboardContext)
}

export default Dashboard