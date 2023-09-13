import { AiFillSignal, AiFillFileAdd, AiFillFile } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

import { useDashboardContext } from '../pages/Dashboard'

const Sidebar = () => {

    const {logoutUser} = useDashboardContext()

    return (
        <div className="h-[100vh] bg-[#F3F4F8] flex flex-col justify-around items-center p-5">
            <div className="w-16 h-16 rounded-full bg-white"></div>
            
            {/* button container */}
            <div className="flex justify-between flex-col h-[40%] self-stretch items-center">
                <NavLink to='create' end>
                    {({isActive}) => (
                        <>
                            <AiFillFileAdd
                                className={`w-10 h-10 ${isActive ? 'bg-[#9B59B6] w-12 h-12' : 'bg-[#ffffff]'} duration-300 ease-in-out p-1 rounded-md`} 
                                fill={isActive ? '#ffffff' : '#3C6077'} 
                                />
                            <p className={`text-xs mt-1 text-center text-bluePrimary ${isActive ? 'visible' : 'invisible'}`}>Create</p>
                        </>
                    )}
                </NavLink>
                <NavLink to='tasks' end>
                    {({isActive}) => (
                         <>
                            <AiFillFile
                                className={`w-10 h-10 ${isActive ? 'bg-[#9B59B6] w-12 h-12' : 'bg-[#ffffff]'} duration-300 ease-in-out p-1 rounded-md`} 
                                fill={isActive ? '#ffffff' : '#3C6077'} 
                                />
                            <p className={`text-xs mt-1 text-center text-bluePrimary ${isActive ? 'visible' : 'invisible'}`}>All Tasks</p>
                        </>
                    )}
                </NavLink>
                <NavLink to='/dashboard' end>
                    {({isActive}) => (
                         <>
                            <AiFillSignal
                                className={`w-10 h-10 ${isActive ? 'bg-[#9B59B6] w-12 h-12' : 'bg-[#ffffff]'} duration-300 ease-in-out p-1 rounded-md`} 
                                fill={isActive ? '#ffffff' : '#3C6077'} 
                                />
                            <p className={`text-xs mt-1 text-center text-bluePrimary ${isActive ? 'visible' : 'invisible'}`}>Stats</p>
                        </>
                    )}
                </NavLink>
            </div>

            {/* logout button */}
            <button onClick={logoutUser} className='text-bluePrimary cursor-default'>
                logout
            </button>
        </div>
    )
}

export default Sidebar