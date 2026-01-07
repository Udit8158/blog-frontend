import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import SignIn from "./pages/SignIn";
import { useContext } from "react";
import { AuthContext } from "./components/auth/AuthProvider";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard/signin" element={<SignIn />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
