/* eslint-disable react-refresh/only-export-components */
import axios from 'axios'
import {Logo} from '../components'
import { Link, Form, redirect } from 'react-router-dom'
import {toast} from 'react-toastify'

export const action = async ({request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
        await axios.post('/api/v1/auth/register', data)
        toast.success('User Created!')
        return redirect('/')
    } catch (error) {
        toast.error(error.response.data.msg)
        return redirect('.')
    }
}

const Register = () => {
  return (
    <div className="bg-primary min-w-[100vw] min-h-[100vh] flex items-center justify-center">
        <Form method='POST' className="py-5 px-10 login-container rounded-md border-t-8 border-goldenWhite lg:w-[31%] text-center text-goldenWhite bg-secondary">
            <Logo center />
            <h3 className="text-2xl my-5">Register</h3>

            <div className="flex flex-col justify-start items-start">
                <label htmlFor="name">Name</label>
                <input required className="px-5 outline-none py-1 mt-2 w-full rounded-lg bg-secondaryDarker border" type="text" name="name" id="name" />
            </div>

            <div className="flex flex-col mt-5 justify-start items-start">
                <label htmlFor="email">Email</label>
                <input required className="px-5 outline-none py-1 mt-2 w-full rounded-lg bg-secondaryDarker border" type="email" name="email" id="email" />
            </div>

            <div className="flex flex-col mt-5 justify-start items-start">
                <label htmlFor="password">Password</label>
                <input required className="px-5 outline-none py-1 mt-2 w-full rounded-lg bg-secondaryDarker border" type="password" name="password" id="password" />
            </div>

            <button className='bg-secondaryDarker text-goldenWhite cursor-default py-2 w-full mt-5 rounded-md'>Submit</button>

            <p className='mt-4'>already have an account? <Link to='/' className='font-bold underline'>login</Link> here</p>
        </Form>
    </div>
  )
}

export default Register