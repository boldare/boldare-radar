import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import * as React from "react";
import { useEffect } from "react";
import { ampli } from "../ampli";
import { Login } from "../components/Login";
import { useGoogleAuth } from "../hooks/useGoogleAuth";

const isDev = () => {
  return process.env.NODE_ENV === "development";
};

interface RootProps {
  children: React.ReactNode;
}

const Root = ({ children }: RootProps) => {
  const { siteConfig } = useDocusaurusContext();
  if (!ampli.isLoaded) {
    ampli.load({
      client: {
        apiKey:
          String(siteConfig.customFields?.REACT_APP_AMPLITUDE_API_KEY) || "",
      },
    });
  }
  const { logged } = useGoogleAuth({ buttonElementId: "googleLoginElement" });

  if (!logged && !isDev()) {
    return <Login />;
  }

  return children;
};

export default Root;
