import { Children, cloneElement, ReactElement } from "react";

interface RoundIconProps {
    color?: String,
    className?: String
    children: JSX.Element
}

export const RoundIcon = ({ color = 'bg-slate-200', className = '', children }: RoundIconProps) => (
    <div className={`h-10 w-10 flex rounded-full ${color} ${className}`}>
        {Children.map((children as ReactElement), (child: ReactElement<any>, index: number) =>
            cloneElement(child, { key: index, className: "text-white m-auto text-lg" })
        )}
    </div>
)