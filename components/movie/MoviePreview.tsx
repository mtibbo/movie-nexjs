import { Movie, MovieCredits } from "lib/types"

import { MovieBackground } from "./MovieBackground";
import { MovieSidePreview } from "./MovieSidePreview";
import { MoviePresentation } from "./MoviePresentation";
import { MovieTabs } from "./tabs/MovieTabs";

interface MoviePreviewProps {
    movie: Movie,
    credits: MovieCredits
}

export const MoviePreview = ({ movie, credits }: MoviePreviewProps) => {
    return movie ? (
        <>
            <MovieBackground
                videos={movie.videos?.results}
            />
            <div className="md:container md:mx-auto px-4">
                <div className="flex flex-row">
                    <MovieSidePreview
                        movie={movie}
                    />
                    <div className="xl:basis-4/12 basis-0"></div>
                    <div className="xl:basis-3/4 basis-full mt-10">
                        <MoviePresentation movie={movie} />
                    </div>
                </div>
            </div>
            <MovieTabs movie={movie} credits={credits} />
        </>
    ) : null;
}