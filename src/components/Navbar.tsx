import React from "react";
import useScrollSpy from "../components/useScrollSpy";

const sections: string[] = ["#home", "#about", "#contact"];

const Navbar: React.FC = () => {
  const activeId = useScrollSpy(sections, 100);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#fff",
        padding: "1rem",
        zIndex: 1000,
        borderBottom: "1px solid #ccc",
      }}
    >
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {sections.map((id) => {
          const label = id.replace("#", "");
          return (
            <li key={id}>
              <a
                href={id}
                style={{
                  color: activeId === id ? "blue" : "black",
                  fontWeight: activeId === id ? "bold" : "normal",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
