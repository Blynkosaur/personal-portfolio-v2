import { PiGameController, PiGameControllerFill } from "react-icons/pi";
import { Button } from "./ui/button";
import { Highlighter } from "./ui/highlighter";
import { useState } from "react";

export default function GameToggle({ checked, onChange, className, ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onChange) {
      onChange({ target: { checked: !checked } });
    }
  };

  return (
    <Button
      className={className}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "48px",
        padding: "8px 12px",
        border: "1px solid #6b7280",
        borderRadius: "8px",
        cursor: "none",
      }}
      {...props}
    >
      {isHovered ? (
        <Highlighter
          action="underline"
          iterations={1}
          padding={0}
          animationDuration={50}
          color="#ffffff"
        >
          {checked ? (
            <PiGameControllerFill
              style={{
                color: "#c4a3ec",
                fontSize: "24px",
              }}
            />
          ) : (
            <PiGameController
              style={{
                color: "#c4a3ec",
                fontSize: "24px",
              }}
            />
          )}
        </Highlighter>
      ) : (
        checked ? (
          <PiGameControllerFill
            style={{
              color: "#c4a3ec",
              fontSize: "24px",
            }}
          />
        ) : (
          <PiGameController
            style={{
              color: "#c4a3ec",
              fontSize: "24px",
            }}
          />
        )
      )}
    </Button>
  );
}
