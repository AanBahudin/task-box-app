import { Outlet, redirect } from "react-router-dom"
import axios from "axios"

export const loader = async () => {
  try {
    await axios.get('/api/v1/user/current-user')
    return redirect('/dashboard')
  } catch (error) {
    return error
  }
}

const HomeLayout = () => {
  return (
    <>
        <Outlet />
    </>
  )
}

export default HomeLayout