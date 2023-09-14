/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */

import { Form, useOutletContext, redirect, useNavigation } from 'react-router-dom'
import { FormInput } from '../components'
import axios from 'axios'
import { toast } from 'react-toastify'

export const action = async({request}) => {
  const formData = await request.formData()

  const file = formData.get('avatar')
    if (file && file.size > 500000) {
      toast.error('image size too large')
      return null
    }

  try {
    await axios.patch('/api/v1/user/update-user', formData)
    toast.success('Profile Updated!')
    return redirect('.')
  } catch (error) {
    toast.error(error.response.data.msg)
    return error
  }
}

const Profile = () => {

  // const {user} = useOutletContext()
  const isSubmitting = useNavigation().state === 'submitting'
  
  return (
    <div className='p-20 w-full max-h-[100vh] flex justify-center items-center gap-x-10'>

      <section className='min-h-[60vh] bg-greyPrimary drop-shadow-xl rounded-md p-5 w-[25%]'>
        <div className='w-20 h-20 bg-white rounded-full mx-auto'></div>
        <h5 className='text-center text-sm font-semibold text-purplePrimary mt-3'>Aan Bahudin</h5>
        <p className='text-center text-xs mt-1 text-bluePrimary'>aanbahudin@gmail.com</p>

        <article className='mt-16'>
          <div className='w-[90%] mx-auto flex justify-between text-xs text-bluePrimary mt-5'>
            <h5 className='text-purplePrimary'>Joined Since</h5>
            <p>May, 1st</p>
          </div>

          <div className='w-[90%] mx-auto flex justify-between text-xs text-bluePrimary mt-5'>
            <h5 className='text-purplePrimary'>Last Updated</h5>
            <p>June, 5th</p>
          </div>

          <div className='w-[90%] mx-auto flex justify-between text-xs text-bluePrimary mt-5'>
            <h5 className='text-purplePrimary'>Total Tasks</h5>
            <p>43</p>
          </div>
        </article>
      </section>

      <section className='min-h-[60vh] max-h-[60vh] bg-greyPrimary drop-shadow-xl rounded-md p-8 w-[70%]'>
        <h4 className='text-xl font-semibold text-purplePrimary'>Account Setting</h4>

        <Form method='POST'>
          <div className='w-full grid grid-cols-2 gap-5 mt-5'>
            <FormInput labelText='First Name' labelFor='name' name='name' type='text' defaultValue='Aan' />
            <FormInput labelText='Last Name' labelFor='lastName' name='lastName' type='text' defaultValue='Bahudin' />
            <FormInput labelText='Email' labelFor='email' name='email' type='email' defaultValue='aanbahudin@gmail.com' />
            <FormInput labelText='Location' labelFor='location' name='location' type='text' defaultValue='Indonesia' />
            <FormInput labelText='Instagram url' labelFor='instagramURL' name='instagramURL' type='text' defaultValue=''/>
            <FormInput labelText='Twitter url' labelFor='twitterURL' name='twitterURL' type='text' defaultValue=''/>
          </div>

            <button disabled={isSubmitting} type='submit' className='cursor-default w-full disabled:cursor-not-allowed hover:bg-[#854c9c] bg-[#9B59B6] text-white text-center py-2 px-6 rounded-md my-5'>Update Profile</button>
        </Form>
      </section>
    </div>
  )
}

export default Profile