// 🧠 What is the Portal Pattern?

// The Portal Pattern in React lets you render a component outside the main DOM tree (usually outside your main app root). It's super useful for things like modals, tooltips, dropdowns, etc., where the component needs to appear above everything else.<body>
//   <div id="root"></div>
//   <div id="portal-root"></div> <!-- 👈 this is for portals -->
// </body>

import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  children: React.ReactNode;
};

export function Modal({ children }: ModalProps) {
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div style={{ background: "rgba(0,0,0,0.5)", padding: "20px" }}>
      {children}
    </div>,
    portalRoot
  );
}

// App.tsx
import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <Modal>
          <div style={{ background: "white", padding: "10px" }}>
            <p>This is a modal rendered using a portal!</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default App;
