// react and next
import Image from "next/image";
// interfaces
import { IGame } from "@/interfaces";
// utils
import { textConverter } from "@/utils";

type Props = {
  params: {
    id: number;
  }
}

async function getGame(id: number): Promise<IGame> {
  const url = `${process.env.API_URL}games/${id}?format=normal&api_key=${process.env.API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default async function MoviePage({ params }: Props) {
  const id = params.id;
  const game = await getGame(id);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={game.sample_cover?.image || "/no-image.png"}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {textConverter(game.title)}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {textConverter(game.description)}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {game.platforms[0].first_release_date.toString()}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Votes:</span>
            {game.num_votes}
          </p>
        </div>
      </div>
    </div>
  );
}