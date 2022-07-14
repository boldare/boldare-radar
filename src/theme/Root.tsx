import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import * as React from "react";
import { ampli } from "../ampli";

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
