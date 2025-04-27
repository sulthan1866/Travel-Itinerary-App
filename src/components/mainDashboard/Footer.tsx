import { useState } from "react";
interface Props {
  isDark: boolean;
}
const Footer = ({ isDark }: Props) => {
  const [navItems, setNavItems] = useState([
    { icon: "house-fill", active: true },
    { icon: "search", active: false },
    { icon: "grid", active: false },
    { icon: "heart", active: false },
    { icon: "person", active: false },
  ]);
  const bg = isDark ? "bg-dark" : "bg-light";
  const iconActiveColor = isDark ? "yellow" : "blue";
  const iconBg = isDark ? "lightgoldenrodyellow" : "lightblue";
  const handleNavClick = (index: number) => {
    setNavItems((prevItems) =>
      prevItems.map((item, idx) => ({
        ...item,
        active: idx === index,
      }))
    );
  };

  return (
    <nav className="fixed-bottom" style={{ color: "lightgoldenrodyellow" }}>
      <ul
        className={
          `d-flex justify-content-around align-items-center m-0 p-2 ` + bg
        }
      >
        {navItems.map((item, idx) => (
          <li key={idx} className="list-unstyled">
            <button
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "48px",
                height: "48px",
                border: "none",
                borderRadius: "50%",
                backgroundColor: item.active ? iconBg : "transparent",
                color:
                  item.active || item.icon === "grid"
                    ? iconActiveColor
                    : "grey",
              }}
              onClick={() => handleNavClick(idx)}
            >
              <i
                className={`bi bi-${item.icon}`}
                style={{ fontSize: "1.25rem" }}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Footer;
