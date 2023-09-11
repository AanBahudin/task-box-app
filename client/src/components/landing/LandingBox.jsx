import { boxContent } from '../../utils/helper'
import { motion } from 'framer-motion'

const LandingBox = () => {
  return (
    <div className="w-[90%] mx-auto p-10">

        <motion.section
            initial={{x: 500}}
            transition={{ ease: 'easeInOut', duration: 1 }}
            viewport={{ once: true }}
            whileInView={{x: 0}} 
            className="flex items-center justify-between p-14 rounded-lg my-10 bg-gradient-to-r from-[#9B59B6] to-[#3498DB] w-full drop-shadow-2xl">
            <h3 className="w-[30%] text-center text-2xl font-semibold tracking-wide text-white line leading-relaxed">Are you often <br /> overwhelmed by the never-ending list of <br /> tasks?</h3>

            <div className='flex flex-wrap justify-between w-[60%] gap-y-8 flex-row'>
                {boxContent.map((item, index) => {
                    return (
                        <div key={index} className='text-white w-1/2'>
                            <img className='w-7 h-7 bg-white p-1 rounded-md' src={item.logo} alt="" />
                            <h4 className='text-md my-2 font-semibold'>{item.title}</h4>
                            <p className='text-sm w-[90%]'>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </motion.section>
    </div>
  )
}

export default LandingBox