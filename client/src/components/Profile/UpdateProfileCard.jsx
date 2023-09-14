/* eslint-disable react/prop-types */
import FormInput from "../FormInput"
import { Form } from "react-router-dom"

const UpdateProfileCard = ({isSubmitting}) => {
  return (
    <section className='min-h-[60vh] max-h-[60vh] bg-greyPrimary drop-shadow-xl rounded-md p-8 w-[70%]'>
        <h4 className='text-xl font-semibold text-purplePrimary'>Account Setting</h4>

        <Form method='POST' encType='multipart/form-data'>
          <div className='w-full grid grid-cols-2 gap-5 mt-5'>
            <FormInput labelText='First Name' labelFor='name' name='name' type='text' defaultValue='Aan' />
            <FormInput labelText='Last Name' labelFor='lastName' name='lastName' type='text' defaultValue='Bahudin' />
            <FormInput labelText='Email' labelFor='email' name='email' type='email' defaultValue='aanbahudin@gmail.com' />
            <FormInput labelText='Location' labelFor='location' name='location' type='text' defaultValue='Indonesia' />
            <FormInput labelText='Age' labelFor='age' name='age' type='number' defaultValue=''/>
            <div className={`flex max-w-full flex-col justify-start items-start`}>
                <label htmlFor='avatar'>Photo Profile</label>
                <input className="px-5 py-1 text-sm mt-2 w-full rounded-lg bg-white border-[1px] border-bluePrimary" type='file' accept="image/*"  name='avatar' id='avatar' />
            </div>
          </div>

            <button disabled={isSubmitting} type='submit' className='cursor-default w-full disabled:cursor-not-allowed hover:bg-[#854c9c] bg-[#9B59B6] text-white text-center py-2 px-6 rounded-md my-5'>{isSubmitting ? 'Saving Changes' : 'Update Profile'}</button>
        </Form>
      </section>
  )
}

export default UpdateProfileCard