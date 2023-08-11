import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl items-center sm:mx-auto sm:py-6  ">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
      </div>
      <div className="flex items-center space-x-5">
        <Link href="/">
          <h2>
            <span className="font-bold text-xl bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
        <DarkModeSwitch />
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}
