/* eslint-disable react-refresh/only-export-components */
import avatar from '../assets/images/user.png'
import { Form,useOutletContext, redirect } from 'react-router-dom'
import moment from 'moment/moment'
import axios from 'axios'
import {AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'
import { toast } from 'react-toastify'

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
      <section className="my-10 w-[80%] border-t-4 border-goldenWhite flex justify-between items-center mx-auto py-5 px-10 rounded-md bg-secondary">
        
        {/* image section */}
        <div className='flex'>

          <div>
            <article className="bg-secondaryDarker p-4 w-[130px] rounded-full h-[130px]">
              <img className='object-fill rounded-full' src={avatar} alt="photo profile" />
            </article>
            <p className='text-center mt-2'>Profile</p>
          </div>

          <div className='mx-10 text-md'>
            <h1 className='text-3xl'>{`${user?.name} ${user?.lastName || ''}`}</h1>
            <h4 className='mt-5'>{user?.email}</h4>
            <p className='text-secondaryDarker font-bold'>Joined {moment(user?.createdAt).format('ll')}</p>

            <div className='mt-4'>
              <p className='text-sm mb-2'>social</p>

              <article className='flex gap-x-4'>
                {user?.instagramURL && (<a href={user?.instagramURL} target='_blank' rel="noreferrer"> <AiFillInstagram /> </a>) }
                {user?.twitterURL && (<a href={user?.twitterURL} target='_blank' rel='noreferrer' > <AiFillTwitterSquare /> </a>) }
              </article>
            </div>

          </div>
        </div>

      {/* UPDATE USER FORM */}
      </section>
        
      <section className='my-10  w-[80%] mx-auto py-10 px-10 rounded-md bg-secondary'>
        <h1 className='text-center text-4xl mb-10'>Edit Profile</h1>
        <Form method="POST" className='flex w-full gap-5 flex-wrap items-center justify-start'>

          <div className="flex w-[30%] m-auto flex-col justify-start items-start">
                <label htmlFor="email">Email</label>
                <input defaultValue={user?.email} className="px-5 outline-none py-1 mt-2 w-full rounded-lg bg-secondaryDarker border" type="email" name="email" id="email" />
            </div>

            <div className="flex w-[30%] m-auto  flex-col justify-start items-start">
                <label htmlFor="email">Name</label>
                <input defaultValue={user?.name}  className="px-5 outline-none py-1 mt-2 w-full rounded-lg bg-secondaryDarker border" type="text" name="name" id="name" />
            </div>

            <div className="flex w-[30%] m-auto  flex-col justify-start items-start">
                <label htmlFor="email">Lastname</label>
                <input defaultValue={user?.lastName || ''} className="px-5 outline-none py-1 mt-2 w-full rounded-lg bg-secondaryDarker border" type="text" name="lastName" id="lastName" />
            </div>

            <div className="flex w-[30%] m-auto flex-col justify-start items-start">
                <label htmlFor="email">Location</label>
                <input defaultValue={user?.location || ''} className="px-5 outline-none py-1 mt-2 w-full rounded-lg bg-secondaryDarker border" type="text" name="location" id="location" />
            </div>

            <div className="flex w-[30%] m-auto flex-col justify-start items-start">
                <label htmlFor="email">Instagram url</label>
                <input defaultValue={user?.instagramURL || ''} className="px-5 outline-none py-1 mt-2 w-full rounded-lg bg-secondaryDarker border" type="text" name="instagramURL" id="instagramURL" />
            </div>

            <div className="flex w-[30%] m-auto flex-col justify-start items-start">
                <label htmlFor="email">twitter</label>
                <input defaultValue={user?.twitterURL || ''} className="px-5 outline-none py-1 mt-2 w-full rounded-lg bg-secondaryDarker border" type="text" name="twitterURL" id="twitterURL" />
            </div>
            
            <button type='submit' className='m-auto bg-secondaryDarker text-center w-1/2 p-2 rounded-md mt-5 hover:bg-goldenWhite hover:text-secondaryDarker ease-in-out duration-150 cursor-default'>Submit</button>
        </Form>
      </section>
    </div>
  )
}

export default Profile