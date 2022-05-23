import * as React from "react";
import { Login } from "../components/Login";
import { useGoogleAuth } from "../hooks/useGoogleAuth";

const isDev = () => {
  return process.env.NODE_ENV === "development";
};

interface RootProps {
  children: React.ReactNode;
}

const Root = ({ children }: RootProps) => {
  const { logged } = useGoogleAuth({ buttonElementId: "googleLoginElement" });

  if (!logged && !isDev()) {
    return <Login />;
  }

  return children;
};

export default Root;