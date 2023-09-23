/* eslint-disable react/prop-types */
import PriorityCards from "./PriorityCards"
import {BsExclamationTriangleFill  } from 'react-icons/bs'
import Tasks from "./Tasks"

const PriorityTasks = ({data, todoData}) => {

  return (
    <section>
        <h1 className="text-2xl font-semibold text-purplePrimary flex items-center gap-x-4"> <BsExclamationTriangleFill /> Priority Tasks Overview</h1>
        <p className="mt-5 text-sm">The Priority Task Overview provides a concise summary of your most important and time-sensitive tasks. It offers a quick glance at high-priority items, allowing you to focus on what needs immediate attention and ensuring you stay on top of critical assignments</p>

        {/* <StatsCardContainer data={todoData.priorityTask} colors={['bg-success', 'bg-warning', 'bg-danger']} /> */}
        <PriorityCards data={data} />

        {/* PRIORITY TASKS TABLE */}
        <div className="mt-10 w-full bg-greyPrimary p-4 rounded-lg min-h-[300px]">
          <h3 className="font-semibold text-xl text-purplePrimary mt-4">Priority Tasks</h3>
          <p className="text-sm mt-2">View and manage high-priority tasks that require immediate attention.  </p>

          <Tasks todos={todoData.todos.slice(0,4)} />

          <p className="text-right mt-10 text-sm hover:underline hover:font-semibold text-purplePrimary cursor-default duration-200 ease-in-out">Show All ...</p>
        </div>
      </section>
  )
}

export default PriorityTasks