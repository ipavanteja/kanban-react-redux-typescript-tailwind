import { ChevronDown, ChevronUp } from "lucide-react";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

// Context to manage select state
interface SelectContextProps {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  isOpen: boolean;
  openSelect: () => void;
  closeSelect: () => void;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

// Custom Hook to use Select context
export const useSelect = () => {
  const context = useContext(SelectContext);
  if (!context)
    throw new Error("useSelect must be used within a Select Provider");
  return context;
};

// Select Component (Provider)
interface SelectProps {
  children: ReactNode;
  onSelect?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ children, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    if (onSelect) onSelect(value);
  };

  const openSelect = () => setIsOpen(true);
  const closeSelect = () => setIsOpen(false);

  // Close select on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        closeSelect();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  return (
    <SelectContext.Provider
      value={{
        selectedValue,
        setSelectedValue: handleSelect,
        isOpen,
        openSelect,
        closeSelect,
      }}
    >
      <div ref={selectRef} className="relative inline-block text-left">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

// Trigger Component
export const SelectTrigger: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ className, children }) => {
  const { openSelect } = useSelect();

  return (
    <button
      onClick={openSelect}
      className={`border rounded-md p-3 text-left w-full ${className}`}
    >
      {children}
    </button>
  );
};

// Value Component
export const SelectValue: React.FC<{ placeholder?: string }> = ({
  placeholder,
}) => {
  const { selectedValue } = useSelect();
  const { isOpen } = useSelect();

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm">{selectedValue || placeholder}</span>
      <span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-700" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-700" />
        )}
      </span>
    </div>
  );
};

// Content Component
export const SelectContent: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ className, children }) => {
  const { isOpen } = useSelect();

  return (
    <div
      className={`absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg transition-transform transform duration-200 ease-out ${
        isOpen
          ? "scale-100 opacity-100"
          : "scale-95 opacity-0 pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Group Component
export const SelectGroup: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div>{children}</div>;
};

// Label Component
export const SelectLabel: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className="px-4 py-1 text-sm text-gray-700">{children}</div>;
};

// Item Component
export const SelectItem: React.FC<{ value: string; children: ReactNode }> = ({
  value,
  children,
}) => {
  const { setSelectedValue, closeSelect } = useSelect();

  const handleClick = () => {
    setSelectedValue(value);
    closeSelect();
  };

  return (
    <button
      onClick={handleClick}
      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      {children}
    </button>
  );
};
