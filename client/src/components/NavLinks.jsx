import { NavLink } from "react-router-dom"

const NavLinks = ({ path, icon, text }) => {
  return (
    <NavLink to='profile' end>
        {({isActive}) => (
            <>
                <span className={`w-10 h-10 ${isActive ? 'bg-[#9B59B6] w-12 h-12' : 'bg-[#ffffff]'} ${isActive ? 'fill-white' : 'fill-bluePrimary'} duration-300 ease-in-out p-1 rounded-md`}> {icon} </span>
                {/* <FaUserAlt className={`w-10 h-10 ${isActive ? 'bg-[#9B59B6] w-12 h-12' : 'bg-[#ffffff]'} ${isActive ? 'fill-white' : 'fill-bluePrimary'} duration-300 ease-in-out p-1 rounded-md`} /> */}
                <p className={`text-xs mt-1 text-center text-bluePrimary ${isActive ? 'visible' : 'invisible'}`}>Profile</p>
            </>
        )}
    </NavLink>
  )
}

export default NavLinks