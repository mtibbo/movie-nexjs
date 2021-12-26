import { Cast as CastType } from "lib/types"
import { CastImage } from './CastImage'

interface CastProps {
    cast: CastType,
}

export const Cast = ({ cast }: CastProps) => {
    return (
        <div className='flex my-2 items-center'>
            <CastImage cast={cast} />
            <span className='grow ml-2 font-semibold'>{cast.name}</span>
        </div>
    )
}