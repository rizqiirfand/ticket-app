import { useContext } from "react";
import { TicketContext } from "../context/ticketContext";
import { addTicketApi, getTicketsApi, getTicketsByIdApi, updateTicketApi } from "../api/ticketAPI";

export const useTicket = () => {
  const context = useContext(TicketContext);
  const [state, dispatch] = context;

  const getTicketById = (id) => {
    return getTicketsByIdApi(id, state);
  };
  const getTickets = () => {
    return getTicketsApi(state).then((res) => {
      dispatch({ type: "UPDATE_TICKET", payload: res.data });
    });
  };

  const addTickets = (data) => {
    return addTicketApi(data).then((res) => {
      dispatch({ type: "UPDATE_TICKET", payload: [res.data, ...state] });
    });
  };

  const updateStatus = (id, status) => {
    return updateTicketApi(id, status, state).then((res) => {
      let temp = state.slice(0);
      console.log(temp[temp.findIndex((dt) => dt.id === id)], res.data);
      temp[temp.findIndex((dt) => dt.id === id)] = res.data;
      dispatch({ type: "UPDATE_TICKET", payload: temp });
    });
  };

  return {
    tickets: state,
    updateStatus,
    getTickets,
    getTicketById,
    addTickets,
  };
};
