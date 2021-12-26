import Image from 'next/image'
import { Cast as CastType } from "lib/types"
import { RoundIcon } from 'components/common/RoundIcon'
import { MdPerson } from "react-icons/md"

interface CastImageProps {
    cast: CastType
}

export const CastImage = ({ cast }: CastImageProps) => {
    return cast.profile_path ? (
        <div className='rounded-full overflow-hidden h-12 w-12'>
            <Image
            alt={cast.name}
            height={60}
            width={50}
            src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
        />
        </div>
        
    ) : (
        <RoundIcon>
            <MdPerson />
        </RoundIcon>
    )
}