import { Button } from "@material-ui/core";
import React from "react";
import { provider, auth } from "../firebase";
import "./Login.css";

const Login = () => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/225px-WhatsApp.svg.png"
          alt="whatsapp"
        />
        <div className="login__text">
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
