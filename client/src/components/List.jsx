/* eslint-disable react/prop-types */
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'
import axios from 'axios'
import moment from 'moment'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const List = ({ status, todo, _id, createdAt }) => {

  const navigate = useNavigate()

  const timeStatus = moment(createdAt).subtract(1, 'days').calendar().split(' ')[0];

  const deleteTodo = async(id) => {
    try {
      await axios.delete(`/api/v1/todo/${id}`)
      toast.success('Successfully deleted ...')
      return navigate('.')
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }

  const updateTodoStatus = async (id, status) => {
        try {
            await axios.patch(`/api/v1/todo/${id}`, {todo, status})
            toast(`Task ${status}`)
            return navigate('.')
        } catch (error) {
            toast.error(error.response.data.msg)
            return error
        }
    }

  return (
   <section className="flex items-center w-full justify-between text-[#BDBEBC] my-3 transition ease-in-out duration-150">
        <h5 className="w-[25%]">{todo}</h5>
        <p className="bg-[#1C2E34] px-3 py-1 rounded-md min-w-[120px] text-center">{status}</p>
        
        <div className='flex items-center justify-between gap-x-3'>
            <BiCheck onClick={() => updateTodoStatus(_id, 'completed')} />
            <AiFillSetting onClick={() => updateTodoStatus(_id, 'on Progress')}/>
            <AiFillEdit />
            <AiFillDelete onClick={() => deleteTodo(_id)} />
        </div>

        <p className='text-secondaryDarker italic lowercase text-sm'>{timeStatus}</p>
    </section>
  )
}

export default List