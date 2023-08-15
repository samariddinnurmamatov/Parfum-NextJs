"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

import { login } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store"; // Import RootState type
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Login = () => {
  const { loading } = useAppSelector((state: RootState) => state.auth); // Specify RootState type
  const appDispatch = useAppDispatch(); // Use a different variable name for the app dispatch
  const router = useRouter();

  const [username, setUsername] = useState<string>(""); // State for username
  const [password, setPassword] = useState<string>(""); // State for password

  const loginUser = async () => {
    const userData = { username, password }; // Use the entered username and password
    appDispatch(login({ user: userData, router: router })); // Use appDispatch to call the action
  };

  return (
    <div className="text-center m">
      <input
        type="text"
        placeholder="username"
        className="w-1/2 border mb-3"
        value={username} // Bind the value to state
        onChange={(e) => setUsername(e.target.value)} // Update the state on change
      />
      <br />
      <input
        type="password"
        placeholder="password"
        className="w-1/2 border mb-3"
        value={password} // Bind the value to state
        onChange={(e) => setPassword(e.target.value)} // Update the state on change
      />
      <br />
      <br />
      <button onClick={loginUser} disabled={loading}>
        {loading ? "...loading" : "Login"}
      </button>
    </div>
  );
};

export default Login;
