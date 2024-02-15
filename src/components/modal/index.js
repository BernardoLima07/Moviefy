import { ArrowBack } from "@mui/icons-material";
import React from "react";
import Modal from "react-modal";
import { MovieOverviewModal } from "./styles";

const ModalComponent = ({ isOpen, closeModal, overview }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        },
        content: {
          backgroundColor: "#172431",
          borderRadius: "12px",
          maxWidth: "400px",
          maxHeight: "600px",
          margin: "auto",
        },
      }}
    >
      <ArrowBack
        sx={{
          width: "35px",
          height: "35px",
          color: "#48d2af",
          cursor: "pointer",
        }}
        onClick={closeModal}
      />
      <MovieOverviewModal>{overview}</MovieOverviewModal>
    </Modal>
  );
};

export default ModalComponent;
