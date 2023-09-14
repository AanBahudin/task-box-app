/* eslint-disable react/prop-types */

const FormSelect = ({labelFor, labelText, name, defaultValue, data}) => {
  return (
    <div className={`flex max-w-full flex-col justify-start items-start`}>
        <label htmlFor={labelFor}>{labelText}</label>
        <select defaultValue={defaultValue || 'Office'} className="w-full p-2 rounded-md border-[1px] border-bluePrimary mt-2" name={name} id={name}>
            {data.map((item, index) => {
                return <option key={index} value={item}>{item}</option>
            })}
        </select>
    </div>
  )
}

export default FormSelect