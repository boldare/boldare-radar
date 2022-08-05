import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";
import { RadarContainer } from "../../Radar";

import "./TechRadar.css";

export default function TechRadar() {
  const { siteConfig } = useDocusaurusContext();
  const [items, setItems] = React.useState(null);
  React.useEffect(() => {
    const configItems = siteConfig.customFields?.sidebarItems || [];
    setItems(configItems);
  }, [siteConfig.customFields?.sidebarItems]);

  return (
    <section className={"tech-radar"} id={"tech-radar"}>
      <div className={"container"}>
        <RadarContainer items={items} />
      </div>
    </section>
  );
}
