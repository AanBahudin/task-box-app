/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const SmallInfo = ({title, buttonText}) => {
  return (
    <div className="my-10 w-full text-center text-white px-10 py-16 bg-gradient-to-r from-[#9B59B6] to-[#3498DB]">
        <h1 className="text-2xl mb-5 font-semibold">{title}</h1>
        <Link to='register' className='font-semibold bg-white text-bluePrimary px-7 rounded-md py-2 cursor-default'>{buttonText}</Link>
    </div>
  )
}

export default SmallInfo