import React from "react";
import MDXContent from "@theme-original/MDXContent";

export default function MDXContentWrapper(props) {
  const hasContent = !!props.children.type.metadata.description;
  return (
    <>
      <MDXContent {...props} />
      {!hasContent && (
        <span>
          We’re constantly growing our radar to bring you even more value.{" "}
          <br />
          This page content will be published soon. <br />
          Thank you for understanding.
        </span>
      )}
    </>
  );
}
