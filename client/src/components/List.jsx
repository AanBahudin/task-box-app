/* eslint-disable react/prop-types */
import { useState } from 'react'
import { ListButtons, InputList } from '../components'
import axios from 'axios'
import moment from 'moment'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDashboardContext } from '../pages/Dashboard'


const List = ({ status, todo, _id, createdAt }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [todoId, setTodoId] = useState('')
  const [todoValue, setTodoValue] = useState(todo)
  
  const {deleteTodo, updateTodoStatus} = useDashboardContext()

  const navigate = useNavigate() 
  const timeStatus = moment(createdAt).calendar().split(' ')[0];


  const updateTodoTitle = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(`/api/v1/todo/${todoId}`, {todo: todoValue, status})
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
         <InputList updateTodoTitle={updateTodoTitle} todoValue={todoValue} setTodoValue={setTodoValue} />
        ) : (
          <h5 className={`w-[25%] ${status === 'completed' ? 'line-through italic opacity-40' : null}`}>{todo}</h5>
        ) }
        
        <p className="bg-[#1C2E34] px-3 py-1 rounded-md min-w-[120px] text-center">{status}</p>
      
        <ListButtons updateTodoTitle={updateTodoStatus} id={_id} todo={todo} setTodoId={setTodoId} status={status} setIsEditing={setIsEditing} isEditing={isEditing} updateTodoStatus={updateTodoStatus} deleteTodo={deleteTodo} />

        <p className='text-secondary italic md:visible hidden lowercase text-sm'>{timeStatus}</p>
    </section>
  )
}

export default List