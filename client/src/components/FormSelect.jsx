
const FormSelect = ({labelFor, labelText, name, defaultValue}) => {
  return (
    <div className={`flex max-w-full flex-col justify-start items-start`}>
        <label htmlFor={labelFor}>{labelText}</label>
        <select className="w-full p-2 rounded-md border-[1px] border-bluePrimary mt-2" name={name} id={name}>
            <option value="Office">Office</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="School">School</option>
        </select>
    </div>
  )
}

export default FormSelect