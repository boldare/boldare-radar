import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";
import { RadarContainer } from "../../Radar";

import "./TechRadar.css";

export default function TechRadar() {
  const { siteConfig } = useDocusaurusContext();
  const [items, setItems] = React.useState([] as unknown[]);
  React.useEffect(() => {
    const configItems = siteConfig.customFields?.sidebarItems || [];
    setItems(configItems as unknown[]);
  }, [siteConfig.customFields?.sidebarItems]);

  return (
    <section className={"tech-radar"} id={"tech-radar"}>
      <div className={"container"}>
        <RadarContainer items={items} />
      </div>
    </section>
  );
}
