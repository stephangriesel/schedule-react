import React, { useState } from "react";

import { handleLogin } from "../utils/resource";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    if (username.trim() && password.trim()) {
      e.preventDefault();
      handleLogin(username, password, navigate);
      setPassword("");
      setUsername("");
    }
  };

  return (
    <main className="flex justify-center items-center h-screen rounded p-10">
      <form
        className="flex flex-col bg-slate-300 rounded p-2"
        onSubmit={handleSubmit}
      >
        <h2 className="font-bold m-5">Log into your account</h2>
        <label className="m-2" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="username p-3"
        />
        <label className="m-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="password p-3"
        />
        <button className="loginButton p-2 m-5 transition ease-in-out delay-150 bg-green-500 hover:bg-green-600 duration-300 rounded">
          LOG IN
        </button>
        <p className="text-sm m-4">
          Don't have an account?{" "}
          <Link
            className="link underline decoration-4 decoration-green-500 hover:decoration-green-600"
            to="/register"
          >
            Create one
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
