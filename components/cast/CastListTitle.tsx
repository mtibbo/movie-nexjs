
interface CastListTitleProps {
    title: string
}

export const CastListTitle = ({ title }: CastListTitleProps) => {
    return (
            <span className="font-semibold text-slate-400">{title}</span>
    )
}