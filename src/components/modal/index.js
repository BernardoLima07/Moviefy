import React from "react";
import Modal from "react-modal";
import { ArrowBack } from "@mui/icons-material";
import { MovieOverviewModal } from "./styles";
import { motion } from "framer-motion";

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
          maxHeight: "400px",
          margin: "auto",
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowBack
          sx={{
            width: "35px",
            height: "35px",
            color: "#48d2af",
            cursor: "pointer",
            marginBottom: "20px",
          }}
          onClick={closeModal}
        />
        <MovieOverviewModal>{overview}</MovieOverviewModal>
      </motion.div>
    </Modal>
  );
};

export default ModalComponent;
