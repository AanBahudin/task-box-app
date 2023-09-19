/* eslint-disable no-unused-vars */
import { useDashboardContext } from './Dashboard'
import {TaskOverview, RecentlyAdded, PriorityTasks} from '../components'

const Stats = () => {

  const {todoData} = useDashboardContext()

  return (
    <div className="p-20 w-full max-h-[100vh] scroll-smooth overflow-y-auto text-bluePrimary duration-200 ease-in-out cursor-default">
      
      <TaskOverview data={todoData.completedTask} totalData={todoData.total} />
      <RecentlyAdded />
      <PriorityTasks data={todoData.priorityTask} />

      
    </div>
  )
}

export default Stats