import heroImg from '../../assets/images/newhero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
     <div className="
      min-w-full min-h-[100vh] 
      bg-hero-pattern bg-no-repeat bg-center
      flex items-center justify-between
      duration-150
    ">
      
      <div className="w-[98%] mx-auto flex items-center justify-center flex-row">
        {/* TITLE SECTION */}
        <section className='w-1/2'>
          <h1 className='text-4xl w-[80%] tracking-widest text-bluePrimary font-bold'>Task Box: Your Digital Task Assistant</h1>
          <p className='text-md w-[80%] my-5'>Task Box helps you stay on top of your to-do list effortlessly. Boost your productivity and achieve your goals.</p>

          {/* BUTTON CONTAINER */}
          <div className='flex gap-x-12'>
            <Link to='register' className='font-bold text-bluePrimary px-7 rounded-md py-2 border-[1.5px] border-black cursor-default'>Explore</Link>
            <Link to='register' className='font-bold text-white bg-bluePrimary px-7 rounded-md py-2 cursor-default'>Get Started</Link>
          </div>
        </section>

          <img className='w-[40%]' src={heroImg} alt="" />
      </div>

    </div>
  )
}

export default Hero