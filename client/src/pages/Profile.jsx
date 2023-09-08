/* eslint-disable react-refresh/only-export-components */

import { Form,useOutletContext, redirect, useNavigation } from 'react-router-dom'

import axios from 'axios'

import { toast } from 'react-toastify'
import { FormInput, ProfileContainer } from '../components'

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

  const {user} = useOutletContext()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  
  return (
    <div className="w-full min-h-[100vh] bg-primary text-goldenWhite flex flex-col justify-start">
      
      <ProfileContainer user={user} />  
      
      {/* UPDATE USER FORM */}
      <section className='my-2 md:my-10 w-[90%] md:w-[80%] mx-auto py-10 px-10 rounded-md bg-secondary'>
        <h1 className='text-center text-2xl lg:text-4xl mb-10'>Edit Profile</h1>
        
        <Form method="POST" encType='multipart/form-data' className='flex flex-col lg:flex-row w-full gap-5 flex-wrap items-center justify-start'>

          {/* Email Input */}
          <FormInput
            labelText="email"
            labelFor="email"
            type="email"
            name="email"
            defaultValue={user?.email}
          />

          {/* Name Input */}
          <FormInput 
            labelText="name"
            labelFor= "name"
            type="text"
            name="name"
            defaultValue={user?.name}
          />

          {/* Lastname Input */}
          <FormInput 
            labelText="Lastname"
            labelFor = "lastName"
            type="text"
            name="lastName"
            defaultValue={user?.lastName}
          />

          {/* Location Input */}
          <FormInput 
            labelText="location"
            labelFor = "location"
            type="text"
            name="location"
            defaultValue={user?.location}
          />

          {/* Instagram URL Input */}
          <FormInput 
            labelText="Instagram url"
            labelFor = "instagramURL"
            type="text"
            name="instagramURL"
            defaultValue={user?.instagramURL}
          />

          {/* Twitter Input */}
          <FormInput 
            labelText="Twitter url"
            labelFor = "twitterURL"
            type="text"
            name="twitterURL"
            defaultValue={user?.twitterURL}
          />
            
          <div className="flex w-full m-auto flex-col justify-start items-start">
              <label htmlFor='avatar'>image</label>
              <input className="px-5 outline-none py-1 mt-2 w-full rounded-lg bg-secondaryDarker border" type='file' name='avatar' id='avatar' accept='image/*' />
          </div>
            <button type='submit' disabled={isSubmitting} className='m-auto bg-secondaryDarker text-center w-1/2 p-2 rounded-md mt-5 hover:bg-goldenWhite hover:text-secondaryDarker ease-in-out duration-150 cursor-default'>{isSubmitting ? 'Please Wait ...' : 'Submit'}</button>
        </Form>
      </section>
    </div>
  )
}

export default Profile