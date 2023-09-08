/* eslint-disable react-refresh/only-export-components */
import { Logo, FormInput } from '../components'
import { Link, Form, redirect } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

export const action = async({ request }) => {
  const formData = await request.formData()
  const loginData = Object.fromEntries(formData)

  try {
    await axios.post('/api/v1/auth/login', loginData)
    toast.success('Successfully Login!')
    return redirect('dashboard')
  } catch (error) {
    toast.error(error.response.data.msg)
    return redirect('.')
  }
}

const Login = () => {

  return (
    <div className="bg-primary min-w-[100vw] min-h-[100vh] flex items-center justify-center">
        <Form method='POST' className="py-5 px-10 login-container rounded-md border-t-8 border-goldenWhite lg:w-[31%] text-center text-goldenWhite bg-secondary">
            <Logo center />
            <h3 className="text-2xl my-5">login</h3>

            <FormInput 
                type="email"
                name="email"
                labelText="Email"
                labelFor="email"
                full
            />

            <FormInput 
                type="password"
                name="password"
                labelText="Password"
                labelFor="password"
                full
            />
            
            <button type='submit' className='bg-secondaryDarker text-goldenWhite cursor-default py-2 w-full mt-5 rounded-md'>Submit</button>

            <p className='mt-4'>Not a member yet? <Link to='register' className='font-bold underline'>register</Link> here</p>
        </Form>
    </div>
  )
}

export default Login