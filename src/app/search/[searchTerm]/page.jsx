import Result from '@/components/Result';
import React from 'react'

export default async function SearchPage({params}) {
  const keyword = params.searchTerm
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${keyword}&language=en-US`
  );
  if(!response.ok) {
    throw new Error("Error fetching data")
  }

  const data = await response.json()
  const results = data.results
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className='text-center pt-6'>No results found</h1>
      )}

      {results && <Result results={results}/>}
    </div>
  )
}
