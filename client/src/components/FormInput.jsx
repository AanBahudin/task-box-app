/* eslint-disable react/prop-types */

const FormInput = ({ labelText, labelFor, type, defaultValue, name }) => {
  return (
    <div className="flex w-[30%] m-auto flex-col justify-start items-start">
        <label htmlFor={labelFor}>{labelText}</label>
        <input defaultValue={defaultValue} className="px-5 outline-none py-1 mt-2 w-full rounded-lg bg-secondaryDarker border" type={type} name={name} id={name} />
    </div>
  )
}

export default FormInput