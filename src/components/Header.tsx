// React and Next
import Link from "next/link";
// Components
import {
  DarkModeSwitch,
  MenuItem
} from "@/components";
// Icons
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";


export const Header = () => {
  return (
    <div className="flex justify-between mx-3 lg:mx-auto max-w-6xl items-center py-6">
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/" className="logo">
          <h2 className="text-2xl">
            <span className="font-bold dark:bg-primary-color bg-dark-color py-1 px-2 rounded-lg mr-1 dark:text-contrast-color text-primary-color ">
              WIKI
            </span>
            <span className="text-xl hidden sm:inline">Games</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}