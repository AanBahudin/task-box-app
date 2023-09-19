/* eslint-disable react/prop-types */

import StatsCardContainer from "./StatsCardContainer"
import { BsFillInfoSquareFill } from 'react-icons/bs'


const TaskOverview = ({ data, totalData }) => {
  return (
   <section>
        <h1 className="text-2xl font-semibold text-purplePrimary flex items-center gap-x-4"> <BsFillInfoSquareFill />Tasks Management Overview</h1>
        <p className="mt-5 text-sm">Tasks Management Overview provides a comprehensive view of your task-related activities, helping you efficiently organize, track, and prioritize your tasks. Gain insights into your task management process and stay in control of your workload.</p>

        {/* CARD SECTION */}
       <StatsCardContainer data={data} totalData={totalData} colors={['bg-greyPrimary', 'bg-success', 'bg-warning', 'bg-danger']}  />

        <p className="text-right my-10 text-sm hover:underline hover:font-semibold text-purplePrimary cursor-default duration-200 ease-in-out">Show More ...</p>
      </section>
  )
}

export default TaskOverview