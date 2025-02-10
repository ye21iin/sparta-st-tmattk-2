// Provider 하나 만들어 바깥으로 내보냄
import { createContext, useState } from "react";

export const MessageContext = createContext;

export function MessageProvider({ children }) {
  const [message, setMessage] = useState("");

  return (
    <MessageContext.Provider value={(message, setMessage)}>
      {children}
    </MessageContext.Provider>
  );
}
