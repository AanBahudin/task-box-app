/* eslint-disable react/prop-types */

import {FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useDashboardContext } from '../pages/Dashboard'

const Navbar = ({user}) => {

  const { logoutUser } = useDashboardContext()

  return (
    <div className="w-full py-5 px-10 flex justify-between text-[#BDBEBC] items-center bg-[#1C2E34]">
        <Logo />

        <section className='flex items-center justify-between gap-x-8'>
                <Link to='profile' className='flex justify-between items-center gap-x-4 cursor-default'>
                    <FaUser />
                    {user.name}
                </Link>
            <p onClick={logoutUser} className='cursor-default'>logout</p>
        </section>
    </div>
  )
}

export default Navbar