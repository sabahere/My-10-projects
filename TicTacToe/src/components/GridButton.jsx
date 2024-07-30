export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center text-customWhite w-full h-28 bg-customBlue2 border-8 border-customBlue1 rounded-3xl"
    >
      {children}
    </button>
  );
}
