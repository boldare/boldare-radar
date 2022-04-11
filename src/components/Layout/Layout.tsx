import React from "react";
import { Helmet } from "react-helmet";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>Boldare Radar</title>
      </Helmet>
      <main>{children}</main>
    </>
  );
}
