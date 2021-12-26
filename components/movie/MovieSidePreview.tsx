import { Movie } from 'lib/types'
import Image from 'next/image'

interface MovieSidePreviewProps {
    movie: Movie
}

export const MovieSidePreview = ({ movie }: MovieSidePreviewProps) => {
    return (
        <div className="hidden xl:block relative -top-48">
            <div className='absolute h-128 rounded-lg w-80 shadow-3xl'>
                <Image
                className="rounded-lg"
                alt={movie.title}
                objectFit='cover'
                layout='fill'
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
            </div>
        </div>
    )
}