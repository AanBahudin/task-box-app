
import { Outlet, redirect } from "react-router-dom"
import {Navbar} from "../components"
import axios from 'axios'

export const loader = async() => {
    try {
        const {data} = await axios.get('/api/v1/user/current-user')
        return data
    } catch (error) {
        return redirect('/')
    }
}


const Dashboard = () => {
  return (
    <>
    <div className="w-full h-full relative">
        <Navbar />
        <Outlet />
    </div>
    </>
  )
}

export default Dashboard