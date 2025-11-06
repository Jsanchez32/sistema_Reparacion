import React from "react";

/**
 * Modal simple, sin dependencia externa.
 * Propiedades: visible, title, children, onClose
 */
export default function Modal({ visible, title, children, onClose }) {
  if (!visible) return null;
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <header>
          <h3>{title}</h3>
          <button onClick={onClose}>X</button>
        </header>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
