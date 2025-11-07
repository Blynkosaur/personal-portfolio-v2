import { PiGameController, PiGameControllerFill } from "react-icons/pi";

export default function GameToggle({ checked, onChange, ...props }) {
  const handleClick = () => {
    if (onChange) {
      onChange({ target: { checked: !checked } });
    }
  };

  return (
    <button
      className="cursor-target bg-slate-800/30 text-slate-100 hover:bg-slate-700/50 hover:border-slate-300 hover:text-slate-600 transition-all duration-200 backdrop-blur-sm"
      onClick={handleClick}
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
    </button>
  );
}
