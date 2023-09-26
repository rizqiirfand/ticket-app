import React, { createContext, useReducer, useMemo } from "react";

const initialTicketState = { data: [] };

export const TicketReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TICKET":
      return action.payload;
    default:
      return initialTicketState;
  }
};

export const TicketProvider = (props) => {
  const [state, dispatch] = useReducer(TicketReducer, initialTicketState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <TicketContext.Provider value={value} {...props} />;
};

export const TicketContext = createContext();
