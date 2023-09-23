import RecentlyAddedCard from "./RecentlyAddedCard"
import { BsFillAlarmFill } from 'react-icons/bs'
import { Link } from "react-router-dom"

const RecentlyAdded = () => {
  return (
    <section>
        <h1 className="text-2xl font-semibold text-purplePrimary flex items-center gap-x-4"> <BsFillAlarmFill />Recently Added Tasks</h1>
        <p className="mt-5 text-sm">Recently Added Tasks to view the latest additions to your to-do list. Stay up-to-date with your most recent commitments and ensure nothing slips through the cracks.</p>

        {/* CARDS */}
       <RecentlyAddedCard />

        <Link to="tasks"> <p className="text-right mt-10 text-sm hover:underline hover:font-semibold text-purplePrimary cursor-default duration-200 ease-in-out">Show All ...</p></Link>
      </section>
  )
}

export default RecentlyAdded