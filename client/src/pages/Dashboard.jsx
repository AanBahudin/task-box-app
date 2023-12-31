/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react"
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom"
import axios from 'axios'
import { toast } from "react-toastify"

import { Sidebar } from "../components"

const DashboardContext = React.createContext()

export const loader = async() => {
    try {
        const userData = await axios.get('/api/v1/user/current-user')
        const todoData = await axios.get('/api/v1/todo')
        return {user: userData.data, todoData: todoData.data}
    } catch (error) {
        return redirect('/')
    }
}

const Dashboard = () => {

  const {user, todoData} = useLoaderData()
  const navigate = useNavigate()

  const logoutUser = async() => {
    await axios.get('/api/v1/auth/logout')
    toast.success('Logging Out..')
    navigate('/')
  }

  const deleteTodo = async(id) => {
    try {
      await axios.delete(`/api/v1/todo/${id}`)
      toast.success('Successfully deleted ...')
      return navigate('.')
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }

  const updateTodoStatus = async (id, recentStatus, status, todo) => {
    if (recentStatus === status) {
      toast.info(`task is already ${recentStatus}`)
    } else {
      try {
          await axios.patch(`/api/v1/todo/${id}`, {todo, status})
          toast.success(`Task ${status}`)
          return navigate('.')
      } catch (error) {
          toast.error(error.response.data.msg)
          return error
      }
    }}

  return (
    <DashboardContext.Provider value={{
      user,
      todoData,
      logoutUser,
      deleteTodo,
      updateTodoStatus
    }}>
      <div className="w-full h-full max-h-full flex relative">
          <Sidebar user={user}/>
          <Outlet context={{todoData, user: user.user}} />
      </div>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => {
  return useContext(DashboardContext)
}

export default Dashboard