/* eslint-disable react/prop-types */
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'

const ListButtons = ({id, status, todo, setTodoId, setIsEditing, isEditing,  updateTodoStatus, deleteTodo}) => {
  return (
    <div className='flex items-center justify-between gap-x-3'>
        <BiCheck onClick={() => updateTodoStatus(id, status, 'completed', todo)} />
        <AiFillSetting onClick={() => updateTodoStatus(id, status, 'on Progress', todo)}/>
        <AiFillEdit onClick={() => {
            setIsEditing(!isEditing)
            setTodoId(id)
        }} />
        <AiFillDelete onClick={() => deleteTodo(id)} />
    </div>
  )
}

export default ListButtons