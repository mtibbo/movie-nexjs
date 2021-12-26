import { GetStaticPaths, GetStaticProps } from 'next'
import type { Movie, MovieCredits } from 'lib/types';
import { MovieApi } from 'lib/api';
import { MoviePreview } from 'components/movie/MoviePreview';

interface MoviePageProps {
  movie: Movie,
  credits: MovieCredits
}

const Movie = ({ movie, credits }: MoviePageProps) => {
  return (
    <MoviePreview movie={movie} credits={credits} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  let movie: Movie | {} = {};
  let credits: MovieCredits | {} = {};

  try {
    [movie, credits] = await Promise.all([MovieApi.get(id), MovieApi.credit(id)]);
  } catch (error) {
    console.error(`Get Movie id ${id} error: `, error);
  }

  return {
    props: {
      movie,
      credits
    },
    revalidate: 1,
  };
}

export default Movie
