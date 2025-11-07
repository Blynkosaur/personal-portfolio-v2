import { PiGameController, PiGameControllerFill } from "react-icons/pi";
import { useState } from "react";

export default function GameToggle({ checked, onChange, ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onChange) {
      onChange({ target: { checked: !checked } });
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 12px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: isHovered ? "#5a3d7a" : "transparent",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
      }}
      {...props}
    >
      {checked ? (
        <PiGameControllerFill
          style={{
            color: "#c4a3ec",
            fontSize: "26px",
          }}
        />
      ) : (
        <PiGameController
          style={{
            color: "#c4a3ec",
            fontSize: "26px",
          }}
        />
      )}
    </button>
  );
}
