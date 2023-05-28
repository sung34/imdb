"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return;
    router.push(`/search/${search}`)
  } 
  
  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-6xl items-center justify-between px-5">
      <input
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        className="w-fill h-14 flex-1 rounded-sm bg-transparent placeholder-gray-500 outline-none"
        type="text"
        placeholder="Search keywords..."
      />
      <button disabled={!search} type="submit" className="text-amber-600 disabled:text-gray-400">Search</button>
    </form>
  );
}
// const response = await fetch(
//   `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
// );
