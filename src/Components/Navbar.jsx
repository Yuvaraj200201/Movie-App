import { useContext } from "react";
import { Link } from "react-router-dom";
import { WatchListContext } from "../Context/WatchListContext";
import Title from "../assets/Title icon.png"
import WatchList from "../assets/Watch list icon.png"


const Navbar = () => {
  const { watchList } = useContext(WatchListContext)
  return (
    <nav
      className="bg-black text-white flex justify-between items-center
     p-2 w-full font-bold fixed top-0 z-20 font-serif"
    >
      <Link className="sm:text-2xl lg:text-3xl flex gap-1 items-center" to="/">
      <img className="w-5 sm:w-8 md:w-10" src={Title} alt="" />
        Movies App
      </Link>
      <Link className="sm:text-2xl lg:text-3xl flex gap-1 items-center" to="/watchlist">
      <img className="w-5 h-5 sm:w-8 md:h-10 md:w-10" src={WatchList} alt="" />
        Watchlist({watchList.length})
      </Link>
    </nav>
  );
};

export default Navbar;
