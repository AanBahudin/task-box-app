/* eslint-disable react/prop-types */
import FormInput from "../FormInput"
import { Form } from "react-router-dom"

const UpdateProfileCard = ({isSubmitting}) => {
  return (
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

            <button disabled={isSubmitting} type='submit' className='cursor-default w-full disabled:cursor-not-allowed hover:bg-[#854c9c] bg-[#9B59B6] text-white text-center py-2 px-6 rounded-md my-5'>{isSubmitting ? 'Saving Changes' : 'Update Profile'}</button>
        </Form>
      </section>
  )
}

export default UpdateProfileCard