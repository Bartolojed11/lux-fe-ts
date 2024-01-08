import Head from "next/head";
import React from "react";

import LoginComponent from "@/app/_components/Forms/Auth/LoginComponent";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LoginComponent />
    </>
  );
};

export default Login;
