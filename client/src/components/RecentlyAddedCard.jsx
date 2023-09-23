import { useDashboardContext } from '../pages/Dashboard'

const RecentlyAddedCard = () => {

  const {todoData} = useDashboardContext()
  const newTodo = todoData.todos.slice(0,4)


  return (
    <div className="grid grid-cols-4 gap-x-7 mt-10">

        {newTodo.map((item, index) => {
            return (
                <div key={index} className="bg-greyPrimary duration-200 p-4 rounded-md border-[0.5px] border-black hover:drop-shadow-xl cursor-default">
                    <h5 className="truncate text-sm font-semibold ">{item.task}</h5>
                    <p className="text-xs my-3 truncate">{item.description}</p>
                    <p className="text-center text-purplePrimary text-xs hover:underline hover:font-semibold cursor-default">Show Detail</p>
                </div>
            )
        } )}
    </div>
  )
}

export default RecentlyAddedCard