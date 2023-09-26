import AppRouter from "./Router";
import { AuthProvider } from "./context/auth/authContext";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
