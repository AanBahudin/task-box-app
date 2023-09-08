/* eslint-disable react/prop-types */



const InputList = ({updateTodoTitle, todoValue, setTodoValue}) => {
  return (
    <form onSubmit={e => updateTodoTitle(e)} className='w-[25%]'>
        <input autoFocus type="text" className='rounded-md w-[120%] sm:w-[110%] bg-secondary py-[6px] px-4 outline ring-0 text-sm' value={todoValue} onChange={(e) => setTodoValue(e.target.value)} name='todo' id='todo'  />
    </form>
  )
}

export default InputList