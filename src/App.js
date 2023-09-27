import { I18nextProvider, useTranslation } from "react-i18next";
import AppRouter from "./Router";
import { AuthProvider } from "./context/authContext";
import { TicketProvider } from "./context/ticketContext";

function App() {
  return (
    <AuthProvider>
      <TicketProvider>
        <AppRouter />
      </TicketProvider>
    </AuthProvider>
  );
}

export default App;
