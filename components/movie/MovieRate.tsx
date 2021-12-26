import { RateIcon } from "./RateIcon"

interface MovieRateProps {
    rate?: Number,
    text?: string,
    extra?: JSX.Element | JSX.Element[],
    className?: string,
    color?: string
}

export const MovieRate = ({ color = "bg-amber-400", rate = 0.0, text = '', extra, className = '' }: MovieRateProps) => (
    <div className={className}>
        <div className="flex items-center">
            <RateIcon color={color} className="mr-3" />
            <span className="text-4xl mr-2">{rate.toPrecision(2)}</span>
            {extra}
            <span className="relative -top-2">/ <b>10</b></span>
            <span className="text-xs relative -left-7 top-2 text-slate-400 font-semibold">{text}</span>
        </div>
        
    </div>
)