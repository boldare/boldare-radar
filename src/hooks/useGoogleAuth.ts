import React from "react";
import { CredentialResponse } from "google-one-tap";

export function useGoogleAuth({
  buttonElementId,
}: {
  buttonElementId: string;
}) {
  const [logged, setLogged] = React.useState<boolean>(false);

  function handleCredentialResponse(response: CredentialResponse) {
    setLogged(true);
  }

  React.useEffect(() => {
    window.google.accounts.id.initialize({
      // it's safe to hardcode the code, because the client works only for specified urls
      // and internal workspace users
      client_id:
        "497537043186-stu0gov95730op0tmu4ep0tdmm25ubdt.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });

    const element = document.getElementById(buttonElementId);
    if (element) {
      window.google.accounts.id.renderButton(element, {
        theme: "outline",
        size: "large",
      });
    }

    return () => {
      window.google.accounts.id.cancel();
    };
  }, []);

  return { logged };
}
