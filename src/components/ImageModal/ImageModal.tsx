import Modal from "react-modal";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
}

export default function ImageModal({ isOpen, onClose, imageUrl }: Props) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div>{imageUrl !== null && <img src={imageUrl} alt="Large view" />}</div>
    </Modal>
  );
}
