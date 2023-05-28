import Image from "next/image";
import React from "react";

export default async function MoviePage({ params }) {
  const movieId = params.id;
  console.dir(params);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const movie = await response.json();

  return (
    <div className="w-full">
      <div className="p-2 mx-auto flex max-w-6xl flex-col justify-center   items-center md:flex-row md:space-x-6 md:pt-8">
        <Image
          className="rounded-lg "
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          placeholder="blur"
          blurDataURL="/loading.svg"
          width={640}
          height={300}
          alt={`poster image is not available`}
        ></Image>
        <div className="p-2 md:p-8">
          <h1 className="mb-3 text-lg font-bold">
            {movie.title || movie.name}
          </h1>
          <p className="mb-3 text-lg">
            <span className="mr-1 font-semibold">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Rating:</span>
            {movie.vote_count}
          </p>
          

        </div>
      </div>
    </div>
  );
}
