import { HiOutlineRefresh } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function WinAndLose({ message, resetGame }) {
  return (
    <div>
      <div className="flex items-center justify-center w-custom-width h-96 rounded-3xl bg-custom-gradient">
        <div className="bg-customBlue2 p-8 rounded-3xl text-2xl font-bold text-customWhite">
          {message}
        </div>
        <div className="absolute bottom-4 flex justify-center w-full mb-2">
          <HiOutlineRefresh
            className="w-20 h-20 bg-slate-300 text-customBlue1 rounded-full cursor-pointer mr-8 p-3"
            onClick={resetGame}
          />
          <Link to="/">
            <FaHome className="w-20 h-20 bg-slate-300 text-customBlue1 rounded-full cursor-pointer p-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WinAndLose;
