/* eslint-disable react/prop-types */

const SuggestedTaskCard = ({ task, description, status, priority }) => {
  return (
     <div className="w-full bg-white text-sm p-3 max-w-full">
        <h5 className="font-semibold">{task}</h5>
        <p className="my-3 text-xs truncate">{description}</p>
        <div className="flex justify-between items-center">
            <p className="bg-greyPrimary p-1 w-[40%] text-center rounded-md text-xs">{status}</p>
            <p className="bg-danger text-white w-[40%] text-center p-1 rounded-md text-xs">{priority}</p>
        </div>
    </div>
  )
}

export default SuggestedTaskCard