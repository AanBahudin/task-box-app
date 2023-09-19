/* eslint-disable react/prop-types */
import { GoAlertFill } from 'react-icons/go'

const PriorityCards = ({data}) => {

    const stats = [
        {
            text: 'LOW PRIORITY TASKS',
            count: data.Low,
            icon: <GoAlertFill />,
            color: 'bg-success'
        },
        {
            text: 'MID PRIORITY TASKS',
            count: data.Mid,
            icon: <GoAlertFill />,
            color: 'bg-warning'
        },
        {
            text: 'HIGH PRIORITY TASKS',
            count: data.High,
            icon: <GoAlertFill />,
            color: 'bg-danger'
        }
    ]

    return (
         <div className="grid grid-cols-4 gap-x-10 text-bluePrimary mt-10">
            {stats.map((item, index) => {
                return (
                    <div key={index} className={`${item.color} rounded-md py-1 px-1 h-mediumCard w-mediumCard min-h-[120px] max-h-[120px] border-[0.5px] border-black drop-shadow-xl cursor-default hover`}>
                        <h4 className="text-xs mt-1 flex gap-x-2 ml-3 uppercase"><span className='my-auto'> {item.icon} </span> {item.text}</h4>
                        <p className="text-center text-5xl mt-5 font-semibold text-bluePrimary h-full">{item.count || 0}</p>
                    </div>
                )
            })}
         </div>
    )
}

export default PriorityCards