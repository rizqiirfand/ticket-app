import { useContext } from "react";
import { TicketContext } from "../context/ticketContext";
import { getTicketsApi, updateTicketApi } from "../api/ticketAPI";

export const useTicket = () => {
  const context = useContext(TicketContext);
  const [state, dispatch] = context;

  const getTickets = () => {
    return getTicketsApi().then((res) => {
      dispatch({ type: "UPDATE_TICKET", payload: res.data });
    });
  };

  const updateStatus = (id, status) => {
    return updateTicketApi(id, status).then((res) => {
      let temp = state.slice(0);
      temp[temp.findIndex((dt) => dt.id === id)] = res.data;
      dispatch({ type: "UPDATE_TICKET", payload: temp });
    });
  };

  return {
    tickets: state,
    updateStatus,
    getTickets,
  };
};
