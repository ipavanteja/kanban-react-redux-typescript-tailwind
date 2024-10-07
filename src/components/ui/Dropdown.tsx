import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  useEffect,
} from "react";

// Context to manage dropdown state
interface DropdownContextProps {
  isOpen: boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
}

const DropdownContext = createContext<DropdownContextProps | undefined>(
  undefined
);

// Dropdown Component (Provider)
interface DropdownProps {
  children: ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <DropdownContext.Provider value={{ isOpen, openDropdown, closeDropdown }}>
      <div ref={dropdownRef} className="relative inline-block text-left">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

// Trigger Component
export const DropdownTrigger: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ className, children }) => {
  const context = useContext(DropdownContext);
  if (!context)
    throw new Error("DropdownTrigger must be used within a Dropdown");

  const { openDropdown } = context;

  return (
    <div onClick={openDropdown} className={`cursor-pointer ${className}`}>
      {children}
    </div>
  );
};

// Content Component
export const DropdownContent: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ className, children }) => {
  const context = useContext(DropdownContext);
  if (!context)
    throw new Error("DropdownContent must be used within a Dropdown");

  const { isOpen, closeDropdown } = context;

  return (
    <div
      className={`absolute left-0 z-10 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 ease-out ${
        isOpen
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      } ${className}`}
    >
      <div className="py-1" onClick={closeDropdown}>
        {children}
      </div>
    </div>
  );
};

// Item Component
export const DropdownItem: React.FC<{
  children: ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer"
    >
      {children}
    </div>
  );
};

// Label Component
export const DropdownLabel: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="px-4 py-2 text-sm font-semibold text-gray-900">
      {children}
    </div>
  );
};

// Separator Component
export const DropdownSeparator: React.FC = () => {
  return <div className="border-t border-gray-200 my-1" />;
};
