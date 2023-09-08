/* eslint-disable react/prop-types */
import avatar from '../assets/images/user.png'

import moment from 'moment/moment'
import {AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'

const ProfileContainer = ({ user }) => {
  return (
    <section className="my-10 md:my-10 w-[90%] md:w-[80%] border-t-4 border-goldenWhite flex justify-center md:justify-between items-center mx-auto py-5 px-10 rounded-md bg-secondary">
        
        {/* image section */}
        <div className='flex flex-col md:flex-row items-center justify-center'>

          <div>
            <article className="bg-secondaryDarker w-[90px] h-[90px] md:w-[130px] rounded-full md:h-[130px]">
              <img className='object-cover w-[90px] h-[90px] md:w-[130px] rounded-full md:h-[130px]' src={user.avatar ? user.avatar : avatar} alt="photo profile" />
            </article>
            <p className='text-center mt-2 text-md md:text-lg'>Profile</p>
          </div>

          <div className='mx-10 mt-5 md:mt-0 text-md drop-shadow-[0,35px, 35px, rgba(189, 190, 188, 0.25)]'>
            <h1 className='text-xl text-center md:text-start md:text-3xl'>{`${user?.name} ${user?.lastName || ''}`}</h1>
            <h4 className='mt-2 text-md md:text-xl opacity-50 text-center md:text-start md:mt-5'>{user?.email}</h4>
            <p className='mt-2 text-md md:text-xl opacity-50 text-center md:text-start md:mt-5'>Joined {moment(user?.createdAt).format('ll')}</p>

            <div className='mt-4'>
              <p className='md:text-md md:text-start text-center text-sm mb-2'>social</p>

              <article className='flex items-center justify-center md:items-start md:justify-start gap-x-4'>
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