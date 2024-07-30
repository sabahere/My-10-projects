import profile from "../assets/profile.png";
import happybot from "../assets/happybot.png";

function ScoreBoard({ scores }) {
  return (
    <div className="flex justify-between my-20">
      <div className="bg-customBlue1 w-36 rounded-xl flex flex-col justify-center items-center p-4">
        <img src={profile} alt="bot" className="rounded-full w-20 h-20" />
        <div className="font-bold text-2xl text-customBlue2">Player X</div>
        <div className="text-customWhite text-5xl font-bold">
          {scores.xScore}
        </div>
      </div>
      <div className="bg-customBlue1 w-36 rounded-xl flex flex-col justify-center items-center">
        <img src={happybot} alt="bot" className="rounded-full w-20 h-20" />
        <div className="font-bold text-2xl text-customBlue2">Player O</div>
        <div className="text-customWhite text-5xl font-bold">
          {scores.oScore}
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
