"use client";

import { useState } from "react";
import "../style.css";
import { registerUser } from "@/utils/api";
import Link from "next/link";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await registerUser({ username, email, password });
      console.log("User created successfully!");
      //Sign in automatically
    } catch (error: any) {
      setError(
        error.response.data ||
          "User registration unsuccessful, something went wrong."
      );
    }
  };

  return (
    <main className="wrapper-padding forms-container">
      <div className="forms">
        <h1 className="primary-highlight">Achieve it.</h1>
        <h2 className="mt-2">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="primary-cta mt-3 w-100">
            Get started
          </button>
          <p className="mt-4">
            Do you have an account?{" "}
            <Link href="/sign-in" className="primary-link">
              Sign in
            </Link>
          </p>
          {error && <p>error</p>}
        </form>
      </div>
    </main>
  );
};

export default SignUp;
