import { useContext, type JSX } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

export default function ({ children }: { children: JSX.Element }) {
  const authContext = useContext(AuthContext);
  const authStatus = authContext.status;
  console.log(authStatus);
  if (authStatus === "unauthorized") {
    return <Navigate to={"/dashboard/signin"} />;
  }

  if (authStatus === "loading") {
    return <p>Loading...</p>;
  }

  return children;
}
