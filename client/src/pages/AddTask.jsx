/* eslint-disable react-refresh/only-export-components */

import { Form, redirect, useNavigation } from "react-router-dom"
import { FormInput, TextInput, FormSelect } from "../components"
import { taskCategory, taskPriority } from "../utils/helper"
import { toast } from "react-toastify"
import axios from "axios"

export const addTaskAction = async({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    await axios.post('/api/v1/todo', data)
    toast.success('Task Created !')
    return redirect('.')
  } catch (error) {
    toast.error(error.response.data.msg)
    return redirect('.')
  }
}

const AddTask = () => {

  const isSubmitting = useNavigation().state === 'submitting'

  return (
    <div className="w-full max-h-[100vh] overflow-y-auto p-20 text-bluePrimary">
       <h1 className="text-2xl font-semibold text-purplePrimary flex items-center gap-x-4"> Create a New Task</h1>
        <p className="mt-5 text-sm">Welcome to the task creation page! Here, you can easily add a new task and stay organized in no time. Simply fill out the details below, and let`&apos;`s get started on your next task.</p>

        <Form method="POST" className="w-[60%] my-10">
          <FormInput labelText="Task Name" labelFor='task' type='text' defaultValue='' name='task' isFocus='on' />
          <TextInput labelFor='description' labelText='Description' defaultValue='' name='description' />

          <div className="w-full grid grid-cols-2 gap-x-10 mt-5">
            <FormSelect labelFor='category' name='category' defaultValue='Office' data={taskCategory} labelText='Task Category' />
            <FormSelect labelFor='priority' name='priority' defaultValue='Low' data={taskPriority} labelText='Task Priority' />
          </div>

          <div className="w-1/2 ml-auto grid grid-cols-2 gap-x-3 mt-5">
            <button type='submit' className='cursor-default w-full disabled:cursor-not-allowed hover:bg-[#854c9c] bg-purplePrimary text-white text-center py-2 px-6 rounded-md my-5'>{isSubmitting ? 'Saving ...' : 'Save'}</button>
            <button type='reset' className='cursor-default w-full disabled:cursor-not-allowed hover:bg-[#EA6060] bg-danger text-white text-center py-2 px-6 rounded-md my-5'>Cancel</button>
          </div>

        </Form>
    </div>
  )
}

export default AddTask