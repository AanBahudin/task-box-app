/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import StatsCard from "./StatsCard"
import { BsClipboard2Fill, BsClipboard2CheckFill, BsClipboard2PulseFill, BsClipboard2XFill } from 'react-icons/bs'

const StatsCardContainer = ({colors, data, totalData}) => {

    const stats = [
        {
            title: 'TOTAL TASK CREATED',
            total: totalData,
            logo: <BsClipboard2Fill />
        },
        {
            title: 'COMPLETED TASKS',
            total: data['Completed'] || 0,
            logo: <BsClipboard2CheckFill />
        },
        {
            title: 'TASKS IN PROGRESS',
            total: data['on Progress'] || 0,
            logo: <BsClipboard2PulseFill />
        },
        {
            title: 'TASKS ON HOLD',
            total: data['Pending'] || 0,
            logo: <BsClipboard2XFill />
        },
    ]

    return (
        <div className="grid grid-cols-4 gap-x-10 text-bluePrimary mt-10">
            {stats.map((item, index) => {
                return (
                    <StatsCard key={index} {...item} color={colors[index] || 'bg-greyPrimary'} />
                )
            })}
        </div>
    )
}

export default StatsCardContainer