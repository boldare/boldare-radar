import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import * as React from "react";
import { ampli } from "../ampli";

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

  return children;
};

export default Root;
