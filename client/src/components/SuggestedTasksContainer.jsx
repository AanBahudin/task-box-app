/* eslint-disable react/prop-types */

import SuggestedTaskCard from "./SuggestedTaskCard"


const SuggestedTasksContainer = ({todoData}) => {
  return (
    <article className="w-[30%] bg-greyPrimary p-5 min-h-[70vh] max-h-[70vh] overflow-y-auto rounded-md drop-shadow-xl">
        <h2 className="font-semibold text-purplePrimary">Suggested Tasks</h2>

        <section className="my-5 flex flex-col gap-y-4">
            {todoData.slice(0, 3).map((item, index) => {
                return <SuggestedTaskCard key={index} {...item} />
            })}
        </section>
    </article>
  )
}

export default SuggestedTasksContainer