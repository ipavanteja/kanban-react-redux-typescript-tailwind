import React, { createContext, useContext, useState, ReactNode } from "react";
import ReactDOM from "react-dom";

// Context to manage modal open/close state
interface ModalContextProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

// Main Modal Component (Provider)
interface ModalProps {
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Trigger Component
export const ModalTrigger: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalTrigger must be used within a Modal");

  const { openModal } = context;

  return (
    <div onClick={openModal} className="cursor-pointer">
      {children}
    </div>
  );
};

// Content Component
export const ModalContent: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ children, className }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalContent must be used within a Modal");

  const { isOpen, closeModal } = context;

  if (!isOpen) return null;

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation(); // Prevent click event from bubbling
    closeModal(); // Close the modal when clicking outside
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClickOutside}
    >
      <div
        className={`bg-white rounded-lg shadow-lg pt-3 px-6 pb-2 relative w-full max-w-lg mx-4 md:mx-0 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

// Additional Structured Components (Header, Title, Description)
export const ModalHeader: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ children, className }) => (
  <div className={`${className}`}>{children}</div>
);

export const ModalTitle: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ children, className }) => (
  <h2 className={`${className}`}>{children}</h2>
);

export const ModalDescription: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ children, className }) => <p className={`${className}`}>{children}</p>;

// ModalFooter Component
export const ModalFooter: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ children, className }) => (
  <div className={`mt-6 flex justify-end space-x-2 ${className}`}>
    {children}
  </div>
);

// ModalClose Component
export const ModalClose: React.FC<{
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ onClick, children, className }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalClose must be used within a Modal");

  const { closeModal } = context;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    closeModal();
  };

  return (
    <button
      className={`text-[#fa896b] hover:text-white border border-[#fa896b] hover:bg-[#fa896b] py-1 leading-7 px-4 rounded-md focus:outline-none transition ease-in-out duration-200 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// ModalSubmit Component
export const ModalSubmit: React.FC<{
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}> = ({ onClick, children, disabled = false, className }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalSubmit must be used within a Modal");

  const { closeModal } = context;

  const handleClick = () => {
    onClick();
    closeModal();
  };

  return (
    <button
      className={`bg-[#5d87ff] text-white hover:shadow-md focus:ring-blue-300 py-1 leading-7 px-4 rounded-md cursor-pointer focus:outline-none transition ease-in-out duration-200 ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
