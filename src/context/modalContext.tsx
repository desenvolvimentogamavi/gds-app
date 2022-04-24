import React, {createContext, ReactNode, useState} from 'react';

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalContextDate {
  closeModal: () => void;
  openModal: () => void;
  modalIsOpen: boolean | false;
}

export const ModalContext = createContext({} as ModalContextDate);

export function ModalProvider({children, ...rest}: ModalProviderProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModal() {
    setModalIsOpen(false);
  }

  function openModal() {
    setModalIsOpen(true);
  }

  return (
    <ModalContext.Provider
      value={{
        closeModal,
        openModal,
        modalIsOpen,
      }}>
      {children}
    </ModalContext.Provider>
  );
}
