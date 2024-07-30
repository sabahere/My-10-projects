import PlayerButton from "../components/PlayerButton";
import EachGrid from "../components/EachGrid";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-3 bg-customBlue1 font-black text-7xl gap-0 border-8 border-customBlue1 rounded-3xl">
        {["T", "I", "C", "T", "A", "C", "T", "O", "E"].map((letter, index) => (
          <EachGrid key={index} text1={letter} text2="home" />
        ))}
      </div>
      <div className="my-20 flex flex-col items-center space-y-16">
        <Link to="/selectmedium">
          <PlayerButton text="Single Player" />
        </Link>
        <Link to="/game">
          <PlayerButton text="Local Multiplayer" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
