import React from "react";
import NavbarItem from "./NavbarItem";

type Props = {};

const NavBar = () => {
  return (
    <div className="flex justify-center bg-amber-50 dark:bg-gray-800 py-2">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default NavBar;
