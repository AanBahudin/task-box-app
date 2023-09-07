import logo from '../assets/images/logo1.png'

const Logo = ({center}) => {
  return (
    <img className={`${center ? 'mx-auto' : null} w-14 h-14 cursor-default`} src={logo} alt="" />
  )
}

export default Logo