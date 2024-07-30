import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import SelectMedium from "./pages/SelectMedium";
import BotGame from "./pages/BotGame";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="bg-customDBlue flex justify-center">
        <div className="bg-customBlue2 h-screen min-w-[300px] px-20 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/selectmedium" element={<SelectMedium />} />
            <Route path="/game" element={<Game />} />
            <Route path="/botgame" element={<BotGame />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
