import React from "react";

interface Props {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const doodleButtonStyle: React.CSSProperties = {
  fontFamily: "Comic Sans MS, cursive, sans-serif",
  boxShadow: "2px 2px 0 rgba(0,0,0,0.3)",
};

const DarkModeButton = ({ isDark, toggleDarkMode }: Props) => {
  return (
    <div className="text-end mb-3">
      <button
        onClick={toggleDarkMode}
        style={doodleButtonStyle}
        className={`btn btn-sm ${
          isDark ? "btn-dark text-warning" : "btn-light text-warning"
        }`}
      >
        {isDark ? "🌙" : "☀️"}
      </button>
    </div>
  );
};
export default DarkModeButton;
