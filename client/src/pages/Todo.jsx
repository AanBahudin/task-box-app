import { toast } from "react-toastify"
import { redirect, useOutletContext, Form } from "react-router-dom"
import { TodoContainer } from "../components"
import axios from "axios"

export const action = async({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
        await axios.post('/api/v1/todo', data)
        toast.success('Task added')
        return redirect('.')
    } catch (error) {
        toast.error(error.response.data.msg)
        return error
    }
}

const Todo = () => {

    const {jobData} = useOutletContext()
    const {todo} = jobData

    return (
        <div>
            Todo page
        </div>    
    )
}

export default Todo