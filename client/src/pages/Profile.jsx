/* eslint-disable react-refresh/only-export-components */

import { Form,useOutletContext, redirect } from 'react-router-dom'

import axios from 'axios'

import { toast } from 'react-toastify'
import { FormInput, ProfileContainer } from '../components'

export const action = async({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    await axios.patch('/api/v1/user/update-user', data)
    toast.success('Profile Updated!')
    return redirect('.')
  } catch (error) {
    toast.error(error.response.data.msg)
    return error
  }
}

const Profile = () => {

  const {user} = useOutletContext()
  
  return (
    <div className="w-full min-h-[100vh] bg-primary text-goldenWhite flex flex-col justify-start">
      
      <ProfileContainer user={user} />  
      
      {/* UPDATE USER FORM */}
      <section className='my-10  w-[80%] mx-auto py-10 px-10 rounded-md bg-secondary'>
        <h1 className='text-center text-4xl mb-10'>Edit Profile</h1>
        <Form method="POST" className='flex w-full gap-5 flex-wrap items-center justify-start'>

          <FormInput
            labelText="email"
            labelFor="email"
            type="email"
            name="email"
            defaultValue={user?.email}
          />

          <FormInput 
            labelText="name"
            labelFor= "name"
            type="text"
            name="name"
            defaultValue={user?.name}
          />

          <FormInput 
            labelText="Lastname"
            labelFor = "lastName"
            type="text"
            name="lastName"
            defaultValue={user?.lastName}
          />

          <FormInput 
            labelText="location"
            labelFor = "location"
            type="text"
            name="location"
            defaultValue={user?.location}
          />

          <FormInput 
            labelText="Instagram url"
            labelFor = "instagramURL"
            type="text"
            name="instagramURL"
            defaultValue={user?.instagramURL}
          />

          <FormInput 
            labelText="Twitter url"
            labelFor = "twitterURL"
            type="text"
            name="twitterURL"
            defaultValue={user?.twitterURL}
          />
            
            <button type='submit' className='m-auto bg-secondaryDarker text-center w-1/2 p-2 rounded-md mt-5 hover:bg-goldenWhite hover:text-secondaryDarker ease-in-out duration-150 cursor-default'>Submit</button>
        </Form>
      </section>
    </div>
  )
}

export default Profile