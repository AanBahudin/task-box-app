/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */

import { Form, useOutletContext, redirect, useNavigation } from 'react-router-dom'
import { FormInput, ProfileCard, UpdateProfileCard } from '../components'
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

      <ProfileCard />
      <UpdateProfileCard isSubmitting={isSubmitting} />
      
    </div>
  )
}

export default Profile