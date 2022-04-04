import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents(
    <script
      key="google-gsi-client"
      src="https://accounts.google.com/gsi/client"
      async
      defer
    ></script>
  );
};
