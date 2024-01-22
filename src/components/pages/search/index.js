import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const Search = ({ isVisible, onClose }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <Modal
        isOpen={isVisible}
        style={customStyles}
        contentLabel="Exemplo de Modal"
      >
        <button onClick={() => onClose()}>close</button>
        <h2>Título do Modal</h2>
        <p>Conteúdo do modal...</p>
      </Modal>
    </div>
  );
};
