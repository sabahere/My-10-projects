import SelectMediumButton from "../components/SelectMediumButton";
import BackArrow from "../components/BackArrow";
import bot from "../assets/bot.png";
import angrybot from "../assets/angrybot.png";
import happybot from "../assets/happybot.png";
import { Link } from "react-router-dom";

function SelectMedium() {
  return (
    <div>
      <BackArrow />
      <div className="h-screen flex flex-col my-32">
        <Link to="/botgame">
          <SelectMediumButton text="Easy" img={happybot} />
        </Link>
        <SelectMediumButton text="Medium" img={bot} />
        <SelectMediumButton text="Hard" img={angrybot} />
      </div>
    </div>
  );
}

export default SelectMedium;
