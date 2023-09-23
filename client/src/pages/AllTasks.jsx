import { useState } from "react"
import { Link, useOutletContext } from "react-router-dom"
import { useDashboardContext } from "./Dashboard"

const AllTasks = () => {

  const [linkActive, setLinkActive] = useState('All')
  const { user } = useOutletContext()
  const { todoData } = useDashboardContext()

  const handleLink = (active) => {
    setLinkActive(active)
  }

  return (
    <section className="p-20 w-full max-h-[100vh] scroll-smooth overflow-y-auto text-bluePrimary duration-200 ease-in-out cursor-default">
      <h4 className="text-2xl font-semibold">Hello {user.name}👋</h4>
      <p className="mt-5 text-sm">Manage your workload efficiently with the All Tasks feature!</p>

      <div className="w-full flex gap-x-10 justify-center items-stretch mt-10">

        {/* task menu section */}
        <article className="w-[70%] max-h-[70vh] p-5 rounded-md bg-greyPrimary drop-shadow-xl">

          <div className='grid bg-red-100 grid-cols-3 items-s'>
            <h2 className={`bg-greyPrimary self-auto text-bluePrimary py-1 px-4 text-center rounded-sm ${linkActive === 'All' && 'bg-purplePrimary text-white'} duration-200 ease-in-out`} onClick={() => handleLink('All')}>All</h2>
            <h2 className={`bg-greyPrimary text-bluePrimary py-1 px-4 text-center rounded-sm ${linkActive === 'Priority' && 'bg-purplePrimary text-white'} duration-200 ease-in-out`} onClick={() => handleLink('Priority')}>Priority</h2>
            <h2 className={`bg-greyPrimary text-bluePrimary py-1 px-4 text-center rounded-sm ${linkActive === 'Status' && 'bg-purplePrimary text-white'} duration-200 ease-in-out`} onClick={() => handleLink('Status')}>Status</h2>
          </div>

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
        </article>


        <article className="w-[30%] bg-greyPrimary p-5 min-h-[70vh] max-h-[70vh] overflow-y-auto rounded-md drop-shadow-xl">
          <h2 className="font-semibold text-purplePrimary">Suggested Tasks</h2>

          {/* <h3 className="mt-3 text-bluePrimary text-sm">Create tasks to see suggested task</h3> */}
          <section className="my-5 flex flex-col gap-y-4">
            <div className="w-full bg-white text-sm p-3 max-w-full">
                <h5>Task title</h5>
                <p className="my-3 truncate">this is for testing only, will remove when aggregation is ready</p>
                <div className="flex justify-between items-center">
                  <p className="bg-greyPrimary p-1 w-[40%] text-center rounded-md text-xs">Pending</p>
                  <p className="bg-danger text-white w-[40%] text-center p-1 rounded-md text-xs">High</p>
                </div>
            </div>

            <div className="w-full bg-white text-sm p-3 max-w-full">
                <h5>Task title</h5>
                <p className="my-3 truncate">this is for testing only, will remove when aggregation is ready</p>
                <div className="flex justify-between items-center">
                  <p className="bg-greyPrimary p-1 w-[40%] text-center rounded-md text-xs">Pending</p>
                  <p className="bg-danger text-white w-[40%] text-center p-1 rounded-md text-xs">High</p>
                </div>
            </div>

            <div className="w-full bg-white text-sm p-3 max-w-full">
                <h5>Task title</h5>
                <p className="my-3 truncate">this is for testing only, will remove when aggregation is ready</p>
                <div className="flex justify-between items-center">
                  <p className="bg-greyPrimary p-1 w-[40%] text-center rounded-md text-xs">Pending</p>
                  <p className="bg-danger text-white w-[40%] text-center p-1 rounded-md text-xs">High</p>
                </div>
            </div>
            <div className="w-full bg-white text-sm p-3 max-w-full">
                <h5>Task title</h5>
                <p className="my-3 truncate">this is for testing only, will remove when aggregation is ready</p>
                <div className="flex justify-between items-center">
                  <p className="bg-greyPrimary p-1 w-[40%] text-center rounded-md text-xs">Pending</p>
                  <p className="bg-danger text-white w-[40%] text-center p-1 rounded-md text-xs">High</p>
                </div>
            </div>

            <div className="w-full bg-white text-sm p-3 max-w-full">
                <h5>Task title</h5>
                <p className="my-3 truncate">this is for testing only, will remove when aggregation is ready</p>
                <div className="flex justify-between items-center">
                  <p className="bg-greyPrimary p-1 w-[40%] text-center rounded-md text-xs">Pending</p>
                  <p className="bg-danger text-white w-[40%] text-center p-1 rounded-md text-xs">High</p>
                </div>
            </div>
            
          </section>
        </article>
      </div>
    </section>
  )
}

export default AllTasks