import { Movie } from "lib/types"
import { MovieRate } from "./MovieRate";
import { MovieRateInput } from "./MovieRateInput";

interface MoviePresentationProps {
    movie: Movie
}

export const MoviePresentation = ({ movie }: MoviePresentationProps) => {
    const movieDate = new Date(movie?.release_date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div>
            <div>
                <span className="text-3xl font-bold mr-2">{movie.title}</span>
                <span className="relative -top-3 text-slate-500">{movieDate.getFullYear()}</span>
            </div>
            <div>
                <span className="text-xl text-slate-500 mt-5">{movie.overview}</span>
            </div>
            <div className="mt-3">
                <span className="text-slate-500 mr-3">{movie.runtime}min</span>
                <span className="mr-3">{movie.genres.map(genre => genre.name).join(", ")}</span>
                <span className="text-slate-500">Release {movieDate.toLocaleDateString(undefined, options)}</span>
            </div>
            <div className="mt-5">
                <div className="md:grid md:grid-cols-3 md:grid-flow-col">
                    <MovieRate className="mb-2 md:mb-0" rate={movie.vote_average} text={`from ${movie.vote_count} USERS`} />
                    <MovieRateInput className="col-span-2" />
                </div>
            </div>
        </div>
    )
}