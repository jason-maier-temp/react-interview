import { useState } from "react";

import { ColorCard, ColorSelector } from "./components";
import { Color, HexColor, Rating } from "./types";

import "./App.css";

function App() {
  const [colors, setColors] = useState<Color[]>([]);

  // const addColor = (color: Color) => setColors([...colors, color]);
  // Create function that adds a color only if it doesn't already exist
  const addColor = (color: Color) => {
    if (!colors.some((existingColor) => existingColor.name === color.name)) {
      setColors([...colors, color]);
    } else {
      alert(`Color ${color.name} already exists!`);
    }
  };

  const updateColorHex = (colorName: string, hexValue: HexColor) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.name === colorName ? { ...color, hex: hexValue } : color,
      ),
    );
  };

  // @TODO: Add a function to remove a color from the list of colors
  const removeColor = (colorName: string) => {
    setColors((prevColors) =>
      prevColors.filter((color) => color.name !== colorName),
    );
  };

  // @TODO: Add a function to update a color's rating
  const updateColorRating = (colorName: string, rating: Rating) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.name === colorName ? { ...color, rating } : color,
      ),
    );
  };

  return (
    <>
      <h1>Color Palette Builder</h1>
      <div className="card">
        <p>
          Pick a color and enter a name to start building your color palette.
        </p>
      </div>
      <ColorSelector addColor={addColor} />
      <section>
        {colors.map((color) => (
          <ColorCard
            key={color.name}
            color={color}
            onDelete={removeColor}
            onHexUpdate={updateColorHex}
            onRatingUpdate={updateColorRating}
          />
        ))}
      </section>
    </>
  );
}

export default App;
