/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import moment from 'moment'
import { BiSolidUser } from 'react-icons/bi'

const ProfileCard = ({user}) => {

  return (
     <section className='min-h-[60vh] bg-greyPrimary drop-shadow-xl rounded-md p-5 w-[25%]'>

        {user.avatar ? (
          <img className='w-20 h-20 bg-white rounded-full mx-auto' src={user.avatar} alt="avatar" />
        ) : (
          <div className='w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center'> <BiSolidUser className='fill-bluePrimary w-16 h-16' /> </div>
        )}

        <h5 className='text-center text-sm font-semibold text-purplePrimary mt-3'>{user.name}</h5>
        <p className='text-center text-xs mt-1 text-bluePrimary'>{user.email}</p>

        <article className='mt-16'>
          <div className='w-[90%] mx-auto flex justify-between text-xs text-bluePrimary mt-5'>
            <h5 className='text-purplePrimary'>Joined Since</h5>
            <p>{moment(user.createdAt).format("MMM Do")}</p>
          </div>

          <div className='w-[90%] mx-auto flex justify-between text-xs text-bluePrimary mt-5'>
            <h5 className='text-purplePrimary'>Last Updated</h5>
            <p>{moment(user.updatedAt).format("MMM Do")}</p>
          </div>

          <div className='w-[90%] mx-auto flex justify-between text-xs text-bluePrimary mt-5'>
            <h5 className='text-purplePrimary'>Last name</h5>
            <p>{user.lastName}</p>
          </div>
        </article>
      </section>
  )
}

export default ProfileCard