import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Tooltip Context
interface TooltipContextProps {
  isVisible: boolean;
  showTooltip: () => void;
  hideTooltip: () => void;
}

const TooltipContext = createContext<TooltipContextProps | undefined>(
  undefined
);

// Tooltip Provider Component
interface TooltipProviderProps {
  children: ReactNode;
}

export const TooltipProvider: React.FC<TooltipProviderProps> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  // Listen for any global event to hide the tooltip
  useEffect(() => {
    if (isVisible) {
      const handleEvent = () => {
        hideTooltip();
      };

      // Register event listeners for global events
      document.addEventListener("click", handleEvent);
      //   document.addEventListener("mousemove", handleEvent);
      document.addEventListener("keydown", handleEvent);

      return () => {
        // Clean up the event listeners
        document.removeEventListener("click", handleEvent);
        // document.removeEventListener("mousemove", handleEvent);
        document.removeEventListener("keydown", handleEvent);
      };
    }
  }, [isVisible]);

  return (
    <TooltipContext.Provider value={{ isVisible, showTooltip, hideTooltip }}>
      {children}
    </TooltipContext.Provider>
  );
};

// Hook to use Tooltip context
const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context)
    throw new Error("useTooltip must be used within TooltipProvider");
  return context;
};

// Tooltip Trigger Component
interface TooltipTriggerProps {
  children: ReactNode;
}

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({ children }) => {
  const { showTooltip, hideTooltip } = useTooltip();

  return (
    <div
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      className="relative inline-block" // Ensure relative positioning
    >
      {children}
    </div>
  );
};

// Tooltip Content Component
interface TooltipContentProps {
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export const TooltipContent: React.FC<TooltipContentProps> = ({
  children,
  position = "top",
  className = "",
}) => {
  const { isVisible } = useTooltip();

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  return (
    <>
      {isVisible && (
        <div
          className={`absolute z-10 px-2 py-1 text-sm text-white bg-black rounded-lg shadow-lg inline-block whitespace-nowrap ${positionClasses[position]} ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
};
