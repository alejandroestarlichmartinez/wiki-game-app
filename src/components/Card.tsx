// react and next
import Image from "next/image";
import Link from "next/link";
// components
import { FiThumbsUp } from "react-icons/fi";
// interfaces
import { IGenre } from "@/interfaces";
// utils
import { textConverter } from "@/utils";

type Props = {
  id: number;
  description: string;
  name: string;
  image: string;
  releaseDate: Date;
  genres: IGenre[],
  votes: number
}

export const Card = ({ id, description, name, image, releaseDate, votes }: Props) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
    <Link href={`/game/${id}`}>
      <Image
        src={image || "/no-image.png"}
        width={500}
        height={150}
        className="rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        placeholder="blur"
        blurDataURL="/spinner.svg"
        alt="image is not available"
      />
    </Link>
    <div className="flex-grow flex flex-col p-2">
      <p className="line-clamp-2 text-md">{textConverter(description)}</p>
      <h2 className="truncate text-lg font-bold">{textConverter(name)}</h2>
      <p className="flex items-center">
        {releaseDate.toString()} <FiThumbsUp className="h-5 mr-1 ml-3" /> {votes}
      </p>
    </div>
  </div>
  );
}