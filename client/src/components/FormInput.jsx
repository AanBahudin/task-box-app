/* eslint-disable react/prop-types */

const FormInput = ({ labelText, labelFor, type, defaultValue, name, isFocus }) => {
  return (
    <div className={`flex max-w-full flex-col justify-start items-start`}>
        <label htmlFor={labelFor}>{labelText}</label>
        <input defaultValue={defaultValue} autoFocus={isFocus} className="px-5 py-1 text-sm mt-2 w-full rounded-lg bg-white border-[1px] border-bluePrimary" type={type} name={name} id={name} />
    </div>
  )
}

export default FormInput