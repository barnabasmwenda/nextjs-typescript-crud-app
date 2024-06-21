"use client";

import { useState } from "react";
import "../style.css";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/api";
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem("token", response.token);
      router.push("/privacy");
    } catch (error: any) {
      setError(error?.response?.data || "Invalid username or password.");
    }
  };

  return (
    <main className="wrapper-padding forms-container">
      <div className="forms">
        <h1 className="primary-highlight">Achieve it.</h1>
        <h2 className="mt-2">Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="primary-cta mt-3 w-100">
            Sign in
          </button>
          <p className="mt-4">
            New to Achieve it?{" "}
            <Link href="/sign-up" className="primary-link">
              Sign up
            </Link>
          </p>
          {error && <p>{error}</p>}
        </form>
      </div>
    </main>
  );
};

export default SignIn;
