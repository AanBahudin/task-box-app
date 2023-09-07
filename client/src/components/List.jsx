/* eslint-disable react/prop-types */
import { useState } from 'react'
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'
import axios from 'axios'
import moment from 'moment'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const List = ({ status, todo, _id, createdAt }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [todoId, setTodoId] = useState('')
  const [todoValue, setTodoValue] = useState(todo)

  const navigate = useNavigate()
  const timeStatus = moment(createdAt).calendar().split(' ')[0];

  const deleteTodo = async(id) => {
    try {
      await axios.delete(`/api/v1/todo/${id}`)
      toast.success('Successfully deleted ...')
      return navigate('.')
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }

  const updateTodoStatus = async (id, recentStatus, status) => {

    if (recentStatus === status) {
      toast.info(`task is already ${recentStatus}`)
    } else {
      try {
          await axios.patch(`/api/v1/todo/${id}`, {todo, status})
          toast.success(`Task ${status}`)
          return navigate('.')
      } catch (error) {
          toast.error(error.response.data.msg)
          return error
      }
    }
    }

    const updateTodoTitle = async (e) => {
      e.preventDefault()
      try {
        await axios.patch(`api/v1/todo/${todoId}`, {todo: todoValue, status})
        setIsEditing(false)
        setTodoId('')
        toast.success('task updated')
        return navigate('.')
      } catch (error) {
        console.log(error);
        setIsEditing(false)
        setTodoId('')
        toast.error(error.response.data.msg)
      }
    }

  return (
   <section className="flex md:text-md items-center w-full justify-between text-[#BDBEBC] my-3 transition ease-in-out duration-150">
        {isEditing ? (
          <form onSubmit={e => updateTodoTitle(e)} className='w-[25%]'>
            <input autoFocus type="text" className='rounded-md w-[120%] sm:w-[110%] bg-secondary py-[6px] px-4 outline ring-0 text-sm' value={todoValue} onChange={(e) => setTodoValue(e.target.value)} name='todo' id='todo'  />
          </form>
        ) : (
          <h5 className={`w-[25%] ${status === 'completed' ? 'line-through italic opacity-40' : null}`}>{todo}</h5>
        ) }
        
        <p className="bg-[#1C2E34] px-3 py-1 rounded-md min-w-[120px] text-center">{status}</p>
      
        <div className='flex items-center justify-between gap-x-3'>
            <BiCheck onClick={() => updateTodoStatus(_id, status, 'completed')} />
            <AiFillSetting onClick={() => updateTodoStatus(_id, status, 'on Progress')}/>
            <AiFillEdit onClick={() => {
              setIsEditing(!isEditing)
              setTodoId(_id)
            }} />
            <AiFillDelete onClick={() => deleteTodo(_id)} />
        </div>

        <p className='text-secondary italic md:visible hidden lowercase text-sm'>{timeStatus}</p>
    </section>
  )
}

export default List