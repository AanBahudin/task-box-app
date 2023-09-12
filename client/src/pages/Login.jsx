/* eslint-disable react-refresh/only-export-components */
import { Logo, FormInput } from '../components'
import { Link, Form, redirect, useNavigation } from 'react-router-dom'
import axios from 'axios'
import registerImage from '../assets/images/signin.svg'
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

  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className='w-full flex max-h-full items-center duration-150 ease-in-out '>

        <section className='flex flex-col items-center justify-center w-[35%] h-[100vh] bg-gradient-to-r from-[#9B59B6] to-[#3498DB]'>
            <div className='p-10 text-white'>
                <h3 className='font-semibold text-3xl'>Log In to Your TaskBox Account</h3>
                <p className='text-sm mt-5 mb-7 w-[79%]'>Let's start organizing your tasks and boosting your productivity.</p>
                <img className='w-[90%] mt-8 mx-auto' src={registerImage} alt="" />
            </div>
        </section>

        <section className='flex items-center register-form justify-center w-[65%] h-[100vh] text-bluePrimary'>
            <div className='w-[85%] p-[5%]'>
                <h2 className='font-semibold text-3xl'>Welcome back to <span className='text-4xl font-bold'> TaskBox </span>!</h2>
                <p className='text-sm mt-4'>Please log in to access your tasks and stay organized.</p>

                <Form method='POST' className='mt-10 max-w-full'>
                    <div className='grid grid-cols-2 gap-x-10 gap gap-y-8'>
                        <FormInput type="email" name="email" labelText="Email" labelFor="email" />
                        <FormInput type="password" name="password" labelText="Account Password" labelFor="password" />
                    </div>

                    <p className='text-xs my-10 italic'>By logging in, you can access your TaskBox account and efficiently manage your tasks. Your data security and privacy are our top priorities</p>
                    <button type='submit' className='cursor-default w-full hover:bg-[#854c9c] bg-[#9B59B6] text-white text-center py-2 px-6 rounded-md my-5'>Login Now</button>
                    <p className='text-sm text-center'>Don't have an account? <Link to='/register' className='font-semibold text-bluePrimary hover:underline cursor-default'> [Register here]  </Link> </p>
                </Form>
            </div>
        </section>
    </div>
  )
}

export default Login