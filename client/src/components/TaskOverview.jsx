/* eslint-disable react/prop-types */

import StatsCardContainer from "./StatsCardContainer"
import { BsFillInfoSquareFill } from 'react-icons/bs'
import { Link } from "react-router-dom"


const TaskOverview = ({ data, totalData }) => {
  return (
   <section>
        <h1 className="text-2xl font-semibold text-purplePrimary flex items-center gap-x-4"> <BsFillInfoSquareFill />Tasks Management Overview</h1>
        <p className="mt-5 text-sm">Tasks Management Overview provides a comprehensive view of your task-related activities, helping you efficiently organize, track, and prioritize your tasks. Gain insights into your task management process and stay in control of your workload.</p>

        {/* CARD SECTION */}
       <StatsCardContainer data={data} totalData={totalData} colors={['bg-greyPrimary', 'bg-success', 'bg-warning', 'bg-danger']}  />

         <Link to="tasks"> <p className="text-right mt-10 text-sm hover:underline hover:font-semibold text-purplePrimary cursor-default duration-200 ease-in-out">Show All ...</p></Link>
      </section>
  )
}

export default TaskOverview