/* eslint-disable react/prop-types */
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'


const List = ({ status, todo }) => {
  return (
   <section className="flex items-center w-full justify-between text-[#BDBEBC] my-3 transition ease-in-out duration-150">
        <h5 className="w-[25%]">{todo}</h5>
        <p className="bg-[#1C2E34] px-3 py-1 rounded-md min-w-[120px] text-center">{status}</p>
        
        <div className='flex items-center justify-between gap-x-3'>
            <BiCheck />
            <AiFillEdit />
            <AiFillDelete />
        </div>
    </section>
  )
}

export default List