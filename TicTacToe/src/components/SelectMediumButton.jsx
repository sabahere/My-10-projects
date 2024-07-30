function SelectMediumButton({ text, img }) {
  return (
    <div
      className="
      bg-customBlue1 w-80 h-20 flex items-center justify-right rounded-full text-4xl text-customWhite font-bold my-12"
    >
      <img src={img} className="w-28 h-28 rounded-full"></img>
      <div className="pl-8">{text}</div>
    </div>
  );
}

export default SelectMediumButton;
