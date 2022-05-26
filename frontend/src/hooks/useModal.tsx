import { useState } from 'react';

export default function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
