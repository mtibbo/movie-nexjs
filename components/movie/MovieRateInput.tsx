
import { useState } from "react"
import { MovieRate } from "./MovieRate"

interface MovieRateInputProps {
    className?: string
}

interface RateDoteProps {
    onMouseEnter?: Function,
    onMouseLeave?: Function,
    activeIndex?: number,
    numbers?: number
}

enum RateClass {
    Active = 'bg-amber-400',
    UnActive = 'bg-slate-200'
}

const RateDot = ({
    onMouseEnter = () => { },
    onMouseLeave = () => { },
    activeIndex = -1,
    numbers = 10 }: RateDoteProps) => {
    const isActiveDot = (index: number) => index <= activeIndex;
    return (
        <>
            {[...Array(numbers)].map((_, index) => (
                <div key={index.toString()}
                    onMouseEnter={() => onMouseEnter(index)}
                    onMouseLeave={() => onMouseLeave(index)}
                    className={`inline-block h-3 w-3 rounded-full ${isActiveDot(index) ? RateClass.Active : RateClass.UnActive} mr-2`}>
                </div>
            ))}
        </>)
}

export const MovieRateInput = ({ className }: MovieRateInputProps) => {
    const [rate, setRate] = useState(0);
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleMouseEnterRateDot = (index: number) => {
        setRate(index + 1);
        setActiveIndex(index);
    }

    const handleMouseLeaveRateDot = (index: number) => {
        setRate(0);
        setActiveIndex(-1);
    }

    return (
        <MovieRate
            rate={rate}
            color={activeIndex > -1 ? RateClass.Active : RateClass.UnActive}
            extra={<RateDot activeIndex={activeIndex} onMouseEnter={handleMouseEnterRateDot} onMouseLeave={handleMouseLeaveRateDot} />}
            className={className}
            text="YOUR RATING" />
    )
}