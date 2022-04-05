import React from "react";

import "./Login.css";

export function Login() {
  return (
    <main className="Login">
      <div className="Login__form">
        <h1 className="Login__title">Boldare Radar</h1>
        <div id="googleLoginElement"></div>
      </div>
    </main>
  );
}
