import React from "react";
import { useAuth } from "@/context/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button className="" onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;
