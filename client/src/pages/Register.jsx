/* eslint-disable react-refresh/only-export-components */
import axios from 'axios'
import { Link, Form, redirect, useNavigation } from 'react-router-dom'
import {toast} from 'react-toastify'
import {FormInput} from '../components'
import registerImage from '../assets/images/signin.svg'

export const action = async ({request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
        await axios.post('/api/v1/auth/register', data)
        toast.success('User Created!')
        return redirect('/login')
    } catch (error) {
        toast.error(error.response.data.msg)
        return redirect('.')
    }
}

const Register = () => {

    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

  return (
    <div className='w-full flex max-h-full items-center duration-150 ease-in-out '>

        <section className='hidden lg:flex flex-col items-center justify-center w-[35%] h-[100vh] bg-gradient-to-r from-[#9B59B6] to-[#3498DB]'>
            <div className='p-10 text-white'>
                <h3 className='font-semibold text-3xl'>Create New Account</h3>
                <p className='text-sm mt-5 mb-7 w-[79%]'>Welcome to TaskBox! Let`&apos;`s start organizing your tasks and boosting your productivity.</p>
                <img className='w-[90%] mt-8 mx-auto' src={registerImage} alt="" />
            </div>
        </section>

        <section className='flex items-center register-form justify-center w-full lg:w-[65%] h-[100vh] text-bluePrimary'>
            <div className='w-[85%] p-[5%]'>
                <h2 className='font-semibold text-3xl'>Welcome to <span className='text-4xl font-bold'> TaskBox </span>! We`&apos;`re excited to have you on board.</h2>
                <p className='text-sm mt-4'>Creating your TaskBox account is quick and easy. Just fill out the form below with your information to get started.</p>

                <Form method='POST' className='mt-10 max-w-full'>
                    <div className='grid grid-cols-2 gap-x-10 gap gap-y-8'>
                        <FormInput type="text" name="name" labelText="Name" labelFor="name" />
                        <FormInput type="text" name="lastName" labelText="Lastname" labelFor="lastName" />
                        <FormInput type="email" name="email" labelText="Email" labelFor="email" />
                        <FormInput type="password" name="password" labelText="Account Password" labelFor="password" />
                    </div>

                    <p className='text-xs my-3 italic'>By registering, you gain access to TaskBox`&apos;`s powerful task management features. We prioritize the security and privacy of your data.</p>
                    <button disabled={isSubmitting} type='submit' className='cursor-default w-full disabled:cursor-not-allowed hover:bg-[#854c9c] bg-[#9B59B6] text-white text-center py-2 px-6 rounded-md my-5'>{isSubmitting ? 'Registering ...' : 'Register Now'}</button>
                    <p className='text-sm text-center'>Already have an account? <Link to='/login' className='font-semibold text-bluePrimary hover:underline cursor-default'> [Log in here]  </Link> </p>
                </Form>
            </div>
        </section>
    </div>
  )
}

export default Register