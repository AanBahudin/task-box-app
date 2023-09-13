/* eslint-disable react/prop-types */

import StatsCard from "./StatsCard"

const StatsCardContainer = ({colors, data}) => {
    return (
        <div className="grid grid-cols-4 gap-x-10 text-bluePrimary mt-10">
            {data.map((item, index) => {
                return (
                    <StatsCard key={index} {...item} color={colors[index] || 'bg-greyPrimary'} />
                )
            })}
        </div>
    )
}

export default StatsCardContainer