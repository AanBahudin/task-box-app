import { useState } from "react"
import { useOutletContext } from "react-router-dom"
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

      <div className="w-full flex gap-x-10 justify-center items-center mt-10">

        {/* task menu section */}
        <article className="w-[70%] bg-greyPrimary p-5 rounded-md">
          <div className='grid bg-red-100 grid-cols-3 items-s'>
            <h2 className={`bg-greyPrimary self-auto text-bluePrimary py-1 px-4 text-center rounded-sm ${linkActive === 'All' && 'bg-purplePrimary text-white'} duration-200 ease-in-out`} onClick={() => handleLink('All')}>All</h2>
            <h2 className={`bg-greyPrimary text-bluePrimary py-1 px-4 text-center rounded-sm ${linkActive === 'Priority' && 'bg-purplePrimary text-white'} duration-200 ease-in-out`} onClick={() => handleLink('Priority')}>Priority</h2>
            <h2 className={`bg-greyPrimary text-bluePrimary py-1 px-4 text-center rounded-sm ${linkActive === 'Status' && 'bg-purplePrimary text-white'} duration-200 ease-in-out`} onClick={() => handleLink('Status')}>Status</h2>
          </div>

          <div className="w-full mt-10 flex min-h-[50vh] flex-col gap-y-1">

            {todoData.todo.map((item, index) => {
              const { task, description, status, priority } = item
              return (
                <div key={index + 1} className="w-full flex justify-between text-sm p-2 bg-white rounded-md">
                  <p className="my-auto w-fit">{index + 1}</p>
                  <p className="my-auto font-semibold w-[20%] truncate">{task}</p>
                  <p className="my-auto w-[20%] truncate">{description}</p>
                  <p className={`p-1 text-center w-[20%] rounded ${status === 'completed' && 'bg-success' || status === 'on Progress' && 'bg-warning' || 'bg-greyPrimary'}`}>{status}</p>
                  <p className="p-1 bg-danger text-center w-[15%] rounded">{priority}</p>
                </div>
              )
            })}

          </div>
        </article>


        <article className="w-[30%] bg-greyPrimary p-5 min-h-[50vh] rounded-md">
          test
        </article>
      </div>
    </section>
  )
}

export default AllTasks

{/* <section className="flex-col flex justify-center items-center w-full gap-y-10">
      <div className='flex w-full items-center justify-around'>
        <h2 onClick={() => handleLink('All')}>All</h2>
        <h2 onClick={() => handleLink('Priority')}>Priority</h2>
        <h2 onClick={() => handleLink('Status')}>Status</h2>

      </div>
        {linkActive === 'All' && 'All task' || linkActive === 'Priority' && 'Priority Task' || 'Status Tasks'}
</section> */}