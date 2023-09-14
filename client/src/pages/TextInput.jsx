/* eslint-disable react/prop-types */

const TextInput = ({labelText, labelFor, name, defaultValue}) => {
  return (
    <div className={`flex max-w-full flex-col justify-start items-start mt-5`}>
        <label htmlFor={labelFor}>{labelText}</label>
        <textarea className="text-xs px-5 py-2 resize-none max-h-[20vh] min-h-[20vh] overflow-y-auto leading-5 mt-2 w-full rounded-lg bg-white border-[1px] border-bluePrimary" name={name} id={name} autoComplete="off" defaultValue={defaultValue} autoCorrect="off"></textarea>
    </div>
  )
}

export default TextInput