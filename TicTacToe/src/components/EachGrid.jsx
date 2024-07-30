import React, { useState } from "react";
import GridButton from "./GridButton"; // Import the Button component

export default function EachGrid({ text1, text2, letter, onClick }) {
  if (text2 === "home") {
    // Render button for home page
    return <GridButton>{text1}</GridButton>;
  } else if (text2 === "game") {
    // Render button for game page
    return <GridButton onClick={onClick}>{letter}</GridButton>;
  }

  return null;
}
