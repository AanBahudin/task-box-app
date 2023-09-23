import { useOutletContext } from "react-router-dom"
import { useDashboardContext } from "./Dashboard"
import { AllTaskLink, Tasks, Loading, SuggestedTasksContainer } from "../components"

const AllTasks = () => {

  const { user } = useOutletContext()
  const { todoData } = useDashboardContext()

  if (!todoData) {
    return <Loading />
  }

  return (
    <section className="p-20 w-full max-h-[100vh] scroll-smooth overflow-y-auto text-bluePrimary duration-200 ease-in-out cursor-default">
      <h4 className="text-2xl font-semibold">Hello {user.name}👋</h4>
      <p className="mt-5 text-sm">Manage your workload efficiently with the All Tasks feature!</p>

      <div className="w-full flex gap-x-10 justify-center items-stretch mt-10">

        {/* task menu section */}
        <article className="w-[70%] max-h-[70vh] p-5 rounded-md bg-greyPrimary drop-shadow-xl">
          <AllTaskLink />
          <Tasks todos={todoData.todos} />

          <div className="my-3 flex gap-x-3 mr-auto w-fit">
            <h1>Previous</h1>
            <h1>Next</h1>
          </div>
        </article>


        <SuggestedTasksContainer todoData={todoData.todos} />
      </div>
    </section>
  )
}

export default AllTasks