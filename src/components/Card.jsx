import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer rounded-lg transition-shadow duration-200 sm:m-2 sm:border sm:border-slate-400 sm:p-3 sm:shadow-md sm:hover:shadow-slate-400">
      <Link href={`/movie/${result.id}`}>
        <Image
          className="transition-opacity duration-200 group-hover:opacity-80 sm:rounded-t-lg"
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          placeholder="blur"
          blurDataURL="/loading.svg"
          width={500}
          height={300}
          alt={`poster image is not available`}
        ></Image>
        <div className="p-2">
          <p className="text-md line-clamp-2">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">{result.release_date || result.first_air_date}
          <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
