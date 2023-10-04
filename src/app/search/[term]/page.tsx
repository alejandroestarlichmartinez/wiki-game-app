// components
import { Results } from "@/components";
// components
import { IGame } from "@/interfaces";

async function getGame(term: string): Promise<IGame[]> {
  const url = `${process.env.API_URL}games?title=${term}&format=normal&api_key=${process.env.API_KEY}`;
  const res = await fetch(url);
  const data = await res.json()
  const results = data.games;
  return results;
}

export default async function SearchPage({ params }: any) {
  const results = await getGame(params.term);

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}