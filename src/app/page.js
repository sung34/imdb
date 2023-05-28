import Result from "@/components/Result";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`
    // { next: { revalidate: 60 * 60 * 24} }
  );
  if (!response.ok) {
    throw new Error("failed to fetch data");
  }

  const results = await response?.json().then((res) => res.results);

  return (
    <div>
      
        <Result results={results} />
    </div>
  );
}
