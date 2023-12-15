import { Color, HexColor, Rating } from "../types";
import { getLegibleTextColor } from "../util";

interface Props {
  color: Color;
  onDelete: (name: string) => void;
  onHexUpdate: (name: string, hex: HexColor) => void;
  onRatingUpdate: (name: string, rating: Rating) => void;
}

export function ColorCard({
  color: { name, hex, rating },
  onDelete,
  onHexUpdate,
  onRatingUpdate,
}: Props) {
  const backgroundColor = hex;
  const contrastingColor = getLegibleTextColor(hex);
  const color = contrastingColor;

  // @TODO: implement hexToRgb and pass rgb() color to `style` prop.
  // const color = hexToRgb(contrastingColor);

  return (
    <div className="colorCard" style={{ backgroundColor, color }}>
      <h2>Name: {name}</h2>
      <button type="button" onClick={() => onDelete(name)}>
        Delete
      </button>
      <p>
        Color: {hex}{" "}
        <input
          type="color"
          value={hex}
          onChange={(event) => {
            onHexUpdate(name, event.target.value as HexColor);
          }}
        />
      </p>
      <div>Rating: {rating}</div>
      {[...Array(5)].map((_, index) => (
        <button
          key={`rating${index}`}
          type="button"
          onClick={() => onRatingUpdate(name, (index + 1) as Rating)}
        >
          &#11088;
        </button>
      ))}
    </div>
  );
}
