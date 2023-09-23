import { useState } from "react"

const AllTaskLink = () => {

    const [linkActive, setLinkActive] = useState('All')
    const handleLink = (active) => {
        setLinkActive(active)
    }

  return (
     <div className='grid bg-red-100 grid-cols-3 items-s'>
        <h2 className={`bg-greyPrimary self-auto text-bluePrimary py-1 px-4 text-center rounded-sm ${linkActive === 'All' && 'bg-purplePrimary text-white'} duration-200 ease-in-out`} onClick={() => handleLink('All')}>All</h2>
        <h2 className={`bg-greyPrimary text-bluePrimary py-1 px-4 text-center rounded-sm ${linkActive === 'Priority' && 'bg-purplePrimary text-white'} duration-200 ease-in-out`} onClick={() => handleLink('Priority')}>Priority</h2>
        <h2 className={`bg-greyPrimary text-bluePrimary py-1 px-4 text-center rounded-sm ${linkActive === 'Status' && 'bg-purplePrimary text-white'} duration-200 ease-in-out`} onClick={() => handleLink('Status')}>Status</h2>
    </div>
  )
}

export default AllTaskLink