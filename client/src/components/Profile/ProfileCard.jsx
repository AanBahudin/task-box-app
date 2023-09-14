
const ProfileCard = () => {
  return (
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
  )
}

export default ProfileCard