import { missionContent } from '../../utils/helper'


const OurMIssion = () => {
  return (
    <div className='min-h-[30vh] min-w-full p-16 bg-mission-bg bg-center bg-cover'>
      <section className="flex w-[90%] justify-between mx-auto self-stretch items-center text-bluePrimary">

        {missionContent.map((item, index) => {
          return (
          <div key={index} className="p-5 border-2 border-[#9A6EBE] bg-white self-stretch hover:border-[#3498DB] hover:drop-shadow-2xl hover:-translate-y-4 duration-200 rounded-lg w-fit max-w-[30%]">
            <img className='w-[40%] mx-auto' src={item.logo} alt="" />
            <h2 className='font-semibold my-5'>{item.title}</h2>
            <p className='text-sm'>{item.text}</p>
          </div>
          )
        })}

      </section>
    </div>
  )
}

export default OurMIssion