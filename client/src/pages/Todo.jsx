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


const styleSection = `
    w-full md:w-[80%] h-[100vh]  mx-auto flex items-center justify-center flex-col
`

const Todo = () => {

    const {jobData} = useOutletContext()
    const {todo} = jobData

    return (
        <div className="w-[100vw] min-h-[100vh] bg-[#030C0E]">
            
            <section className={styleSection}>

                {/* <h1 className="text-[#BDBEBC] text-4xl font-medium">Todo List</h1> */}

                <Form method="POST" className="mt-8 w-[90%] md:w-[60%] py-2 px-7  rounded-2xl mx-auto text-[#BDBEBC] bg-[#1C2E34] flex justify-between items-center">
                    <input className="w-[90%] bg-transparent outline-none border-none py-2" type="text" name="todo" id="todo" placeholder="add your text" />
                    <p>add</p>
                </Form>

                <div className="w-[90%] md:w-[60%] my-8">
                    {todo.length !== 0 ? <TodoContainer todo={todo}  /> : <h1 className="text-center mt-10 text-goldenWhite text-3xl">no task recently ...</h1>}
                </div>

            </section>
        </div>
        )
}

export default Todo