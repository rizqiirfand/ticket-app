import { I18nextProvider, useTranslation } from "react-i18next";
import AppRouter from "./Router";
import { AuthProvider } from "./context/authContext";
import { TicketProvider } from "./context/ticketContext";
import { ColorModeProvider } from "./context/themeContext";

function App() {
  return (
    <AuthProvider>
      <TicketProvider>
        <ColorModeProvider>
          <AppRouter />
        </ColorModeProvider>
      </TicketProvider>
    </AuthProvider>
  );
}

export default App;
