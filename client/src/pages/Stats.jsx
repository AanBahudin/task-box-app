/* eslint-disable no-unused-vars */

import { BsExclamationTriangleFill, BsFillAlarmFill, BsFillInfoSquareFill } from 'react-icons/bs'
import { StatsCardContainer, RecentlyAddedCard } from '../components'
import { useDashboardContext } from './Dashboard'

// Example, will remove when the server is ready
import { taskManagementOverviewExample, priorityTasksExample } from "../utils/helper"

const Stats = () => {

  // will remove when aggregation ready
  const {todoData} = useDashboardContext()

  return (
    <div className="p-20 w-full max-h-[100vh] scroll-smooth overflow-y-auto text-bluePrimary duration-200 ease-in-out cursor-default">
      <section>
        <h1 className="text-2xl font-semibold text-purplePrimary flex items-center gap-x-4"> <BsFillInfoSquareFill />Tasks Management Overview</h1>
        <p className="mt-5 text-sm">Tasks Management Overview provides a comprehensive view of your task-related activities, helping you efficiently organize, track, and prioritize your tasks. Gain insights into your task management process and stay in control of your workload.</p>

        {/* CARD SECTION */}
       <StatsCardContainer data={todoData.completedTasks} text='tasks' totalData={todoData.total} colors={['bg-greyPrimary', 'bg-success', 'bg-warning', 'bg-danger']}  />

        <p className="text-right my-10 text-sm hover:underline hover:font-semibold text-purplePrimary cursor-default duration-200 ease-in-out">Show More ...</p>
      </section>

      {/* RECENTLY ADDED TASKS SECTION */}
      <section>
        <h1 className="text-2xl font-semibold text-purplePrimary flex items-center gap-x-4"> <BsFillAlarmFill />Recently Added Tasks</h1>
        <p className="mt-5 text-sm">Recently Added Tasks to view the latest additions to your to-do list. Stay up-to-date with your most recent commitments and ensure nothing slips through the cracks.</p>

        {/* CARDS */}
       <RecentlyAddedCard />

        <p className="text-right my-10 text-sm hover:underline hover:font-semibold text-purplePrimary cursor-default duration-200 ease-in-out">Show All ...</p>
      </section>

      <section>

        <h1 className="text-2xl font-semibold text-purplePrimary flex items-center gap-x-4"> <BsExclamationTriangleFill /> Priority Tasks Overview</h1>
        <p className="mt-5 text-sm">The Priority Task Overview provides a concise summary of your most important and time-sensitive tasks. It offers a quick glance at high-priority items, allowing you to focus on what needs immediate attention and ensuring you stay on top of critical assignments</p>

        <StatsCardContainer data={todoData.priorityTasks} text="priority tasks" colors={['bg-success', 'bg-warning', 'bg-danger']} />

        {/* PRIORITY TASKS TABLE */}
        <div className="mt-10 w-full bg-greyPrimary p-4 rounded-lg min-h-[300px]">
          <h3 className="font-semibold text-xl text-purplePrimary mt-4">Priority Tasks</h3>
          <p className="text-sm mt-2">View and manage high-priority tasks that require immediate attention.  </p>

          <article className="mx-auto mt-10 flex flex-col gap-y-2">

              <div className="flex items-stretch justify-between py-2 bg-white text-sm px-4 border rounded-md">
                <p className="truncate my-auto">1</p>
                <h5 className="truncate my-auto">Meeting with Marketing Team</h5>
                <h5 className="truncate my-auto">Monday, 1st</h5>
                <h5 className="bg-danger text-white py-1 px-2 rounded-md">On Hold</h5>
                <h5 className="bg-danger text-white py-1 px-2 rounded-md">High </h5>
              </div>

              <div className="flex items-stretch justify-between bg-white  py-2 text-sm px-4 rounded-md">
                <p className="truncate my-auto">1</p>
                <h5 className="truncate my-auto">Meeting with Marketing Team</h5>
                <h5 className="truncate my-auto">Monday, 1st</h5>
                <h5 className="bg-danger text-white py-1 px-2 rounded-md">On Hold</h5>
                <h5 className="bg-warning text-white py-1 px-2 rounded-md">Mid</h5>
              </div>

              <div className="flex items-stretch justify-between bg-white py-2 text-sm px-4 rounded-md">
                <p className="truncate my-auto">1</p>
                <h5 className="truncate my-auto">Meeting with Marketing Team</h5>
                <h5 className="truncate my-auto">Monday, 1st</h5>
                <h5 className="bg-danger text-white py-1 px-2 rounded-md">On Hold</h5>
                <h5 className="bg-danger text-white py-1 px-2 rounded-md">High </h5>
              </div>
          </article>

          <p className="text-right mt-10 text-sm hover:underline hover:font-semibold text-purplePrimary cursor-default duration-200 ease-in-out">Show All ...</p>
        </div>
      </section>
    </div>
  )
}

export default Stats