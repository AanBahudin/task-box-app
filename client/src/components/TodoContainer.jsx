/* eslint-disable react/prop-types */
import List from "./List"

const TodoContainer = ({todo}) => {
  return (
    <>
        {todo.map((item) => {
            return <List key={item._id} {...item} />
        })}
    </>
  )
}

export default TodoContainer