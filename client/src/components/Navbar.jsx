import {FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className="w-full py-5 px-10 flex justify-between text-[#BDBEBC] items-center bg-[#1C2E34]">
        <Logo />

        <section className='flex items-center justify-between gap-x-8'>
                <Link to='profile' className='flex justify-between items-center gap-x-4 cursor-default'>
                    <FaUser />
                    Aan Bahudin
                </Link>
            <p>logout</p>
        </section>
    </div>
  )
}

export default Navbar