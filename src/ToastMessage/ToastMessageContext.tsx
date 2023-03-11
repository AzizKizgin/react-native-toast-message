/** @format */

import { createContext, ReactNode, useContext, useState } from "react";
import BottomToastMessage from "./BottomToastMessage";
import TopToastMessage from "./TopToastMessage";
import { IToast } from "./types";

interface ToastMessageContextProps {
  children: ReactNode;
}

interface ToastMessageContextType {
  showToast: ({
    message,
    color,
    duration,
    position,
    textStyle,
  }: IToast) => void;
}

const ToastMessageContext = createContext<ToastMessageContextType>({
  showToast: () => {},
});

const ToastMessageProvider = ({ children }: ToastMessageContextProps) => {
  const [shouldShowToast, setShouldShowToast] = useState(false);
  const [toastSettings, setToastSettings] = useState<IToast>({
    message: "",
    color: "info",
    duration: 2000,
    position: "bottom",
    textStyle: {},
  });

  const { message, color, duration, position, textStyle } = toastSettings;

  const showToast = ({
    message,
    color,
    duration = 2000,
    position = "bottom",
    textStyle = {},
  }: IToast) => {
    setToastSettings({
      message,
      color,
      duration,
      position,
      textStyle,
    });
    setShouldShowToast(true);
  };

  return (
    <ToastMessageContext.Provider value={{ showToast }}>
      {children}
      {position === "bottom" ? (
        <BottomToastMessage
          color={color}
          duration={duration}
          message={message}
          position={position}
          textStyle={textStyle}
          setShouldShowToast={setShouldShowToast}
          shouldShowToast={shouldShowToast}
        />
      ) : (
        <TopToastMessage
          color={color}
          duration={duration}
          message={message}
          position={position}
          textStyle={textStyle}
          setShouldShowToast={setShouldShowToast}
          shouldShowToast={shouldShowToast}
        />
      )}
    </ToastMessageContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastMessageContext);
};

export { ToastMessageProvider };
