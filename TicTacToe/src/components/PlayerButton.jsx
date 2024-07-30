function PlayerButton({ text }) {
  return (
    <button className="bg-customBlue1 w-80 h-20 flex items-center justify-center rounded-full text-3xl text-customWhite font-bold">
      {text}
    </button>
  );
}

export default PlayerButton;
