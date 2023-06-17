"use client";
import React, { useState } from "react";
import AuthLayout from "../AuthLayout";
import { Input, Checkbox, Button } from "antd";
import axiosProvider from "src/configs/network/AxiosProvider";
import { useRouter } from 'next/router';
import getConfig from 'next/config';

export default function SignInPage(props) {
  const [loginIdentity, setLoginIdentity] = useState("");
  const [hashedPassword, setHashedPassword] = useState("");
  const [errName, setErrName] = useState("");
  const [errPass, setErrPass] = useState("");

  async function loginUser(credentials) {
    const configUrl = process.env.configUrl;
    return axiosProvider.post(configUrl.accounts.login.endpoint, credentials);
  }
  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      if (!loginIdentity) {
        setErrName("You must enter email");
      } else {
        setErrName("");
      }

      if (!hashedPassword) {
        setErrPass("You must enter password");
      } else {
        setErrPass("");
      }

      const user = await loginUser({ loginIdentity, hashedPassword });
      if (user.data.accessToken) {
        cookies.set("accessToken", user.data.accessToken, { path: "/" });
        const router = useRouter();
        // router.push('/');
      } else {
        setErrName("Email or password incorrect!");
      }
    } catch (error) {
      console.log(error);
      setErrName("Email or password incorrect!");
    }
  };
  return (
    <AuthLayout>
      <div className="signin__container">
        <div className="signin__line1">Wellcome !</div>
        <div className="signin__line2">Sign in to</div>
        <div className="signin__line3">Lorem Ipsum is simply</div>
        <div className="signin__title__ip">User name</div>
        <Input placeholder="Enter your user name" className="signin__inp" onChange={(e)=>setLoginIdentity(e.target.value)} />
        <div className="signin__title__ip">Password</div>
        <Input.Password
          placeholder="Enter your Password"
          className="signin__inp"
          onChange={(e) => setHashedPassword(e.target.value)}
        />
        <div className="signin__line4">
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="#">
            Forgot Password ?
          </a>
        </div>
        <Button className="signin__btn" onClick={handleSubmit}>
          Login
        </Button>
        <div className="signin__line5">
          Don’t have any Account ?{" "}
          <a href="" className="signin__register">
            Register
          </a>
        </div>
      </div>
    </AuthLayout>
  );
}

