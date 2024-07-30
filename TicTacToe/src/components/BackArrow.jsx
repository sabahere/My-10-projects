import { HiArrowCircleLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function BackArrow() {
  return (
    <Link to="/">
      <HiArrowCircleLeft className="w-16 h-16 text-customBlue1 bg-slate-300 rounded-full " />
    </Link>
  );
}

export default BackArrow;
