
import { Cast as CastType, Department } from "lib/types"
import { Cast } from "./Cast";
import { CastListTitle } from "./CastListTitle"

interface CastListProps {
    casts: CastType[],
    title: string,
    castType: Department,
    cols?: number,
    limit: number
}

export const CastList = ({ casts, title, castType, cols = 1, limit }: CastListProps) => {
    const list = casts.filter((cast) => cast.known_for_department === castType);
    return (
        <>
            <CastListTitle title={title} />
            <div className={`grid grid-cols-${cols}`}>
                {list.splice(0, limit).map((cast, index) => <Cast key={index.toString()} cast={cast} />)}
            </div>

        </>
    )
}