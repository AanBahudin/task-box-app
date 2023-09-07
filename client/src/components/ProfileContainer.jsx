/* eslint-disable react/prop-types */
import avatar from '../assets/images/user.png'

import moment from 'moment/moment'
import {AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'

const ProfileContainer = ({ user }) => {
  return (
    <section className="my-10 w-[80%] border-t-4 border-goldenWhite flex justify-between items-center mx-auto py-5 px-10 rounded-md bg-secondary">
        
        {/* image section */}
        <div className='flex'>

          <div>
            <article className="bg-secondaryDarker w-[130px] rounded-full h-[130px]">
              <img className='object-cover w-[130px] rounded-full h-[130px]' src={user.avatar ? user.avatar : avatar} alt="photo profile" />
            </article>
            <p className='text-center mt-2'>Profile</p>
          </div>

          <div className='mx-10 text-md drop-shadow-[0,35px, 35px, rgba(189, 190, 188, 0.25)]'>
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

      </section>
  )
}

export default ProfileContainer