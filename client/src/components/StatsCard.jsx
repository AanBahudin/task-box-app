/* eslint-disable react/prop-types */


const StatsCard = ({title, logo, total, color}) => {
  return (
    <div className={`${color} rounded-md py-1 px-1 h-mediumCard w-mediumCard min-h-[120px] max-h-[120px] border-[0.5px] border-black drop-shadow-xl cursor-default hover`}>
        <h4 className="text-xs mt-1 flex gap-x-2 ml-3 uppercase"><span className='my-auto'> {logo} </span> {title}</h4>
        <p className="text-center text-5xl mt-5 font-semibold text-bluePrimary h-full">{total || 0}</p>
    </div>
  )
}

export default StatsCard