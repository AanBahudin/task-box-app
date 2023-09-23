/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Tasks = ({todoData}) => {
  return (
    <div className="w-full mt-10 flex min-h-[50vh] max-h-[50vh] overflow-y-auto flex-col gap-y-1">

        {todoData.todos.length < 1 ? <h1 className="m-auto text-xl">Let&apos;s create your tasks <Link to='/dashboard/create' className="font-semibold underline cursor-default" >here</Link></h1> : (
            todoData.todos.map((item, index) => {
                const { task, description, status, priority } = item
                return (
                <div key={index + 1} className="w-full flex even:bg-greyPrimary justify-between text-sm p-2 bg-white rounded-md">
                    <p className="my-auto w-fit">{index + 1}</p>
                    <p className="my-auto font-semibold w-[20%] truncate">{task}</p>
                    <p className="my-auto w-[20%] truncate">{description}</p>
                    <p className={`p-1 text-center w-[20%] rounded ${status === 'completed' && 'bg-success' || status === 'on Progress' && 'bg-warning' || 'bg-greyPrimary'}`}>{status}</p>
                    <p className={`p-1 text-center w-[15%] text-white rounded ${priority === 'Low' && 'bg-success' || priority === 'Mid' && 'bg-warning' || 'bg-danger text-white'}`}>{priority}</p>
                </div>
                )
            })
            )}
  
    </div>
  )
}

export default Tasks