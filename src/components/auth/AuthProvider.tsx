import axios from "axios";
import { createContext, useEffect, useState, type ReactElement } from "react";
import { apiBaseUrl } from "../../config";

type authStatus = "loading" | "authorized" | "unauthorized";
type user = unknown;

export const AuthContext = createContext({
  status: null, // setting status
  user: null, // user payload {userId...}
  refreshAuth: () => {}, // to call the '/auth/me' againg to resetting the status and all
  // as this authprovider thing will not re run automitically without a refresh
  // but we can call and this refresh thing again to reset the states - to recall AuthProvider
});

export function AuthProvider({ children }: { children: ReactElement }) {
  console.log("AuthProvider Running");
  const [status, setStatus] = useState<authStatus>("loading");
  const [user, setUser] = useState<user>(null);

  const validateUserToken = async () => {
    try {
      setStatus("loading");
      const res = await axios.get(`${apiBaseUrl}/auth/me`, {
        withCredentials: true,
      });

      console.log(res);

      if (res.data.success === true) {
        setStatus("authorized");
        setUser(res.data.data);
      } else {
        setStatus("unauthorized");
      }
    } catch (error) {
      console.log(error);
      setStatus("unauthorized");
      setUser(null);
    }
  };

  useEffect(() => {
    validateUserToken();
  }, []);

  const authContextValue = {
    status: status,
    user: user,
    refreshAuth: validateUserToken,
  };

  return (
    //@ts-ignore
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
