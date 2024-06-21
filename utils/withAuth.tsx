// utils/withAuth.tsx

"use client";

import React, { useEffect, ComponentType } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

const withAuth = <P extends {}>(WrappedComponent: ComponentType<P>) => {
  const WithAuthComponent = (props: P) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/login");
      }

      // eslint-disable-next-line
    }, [isAuthenticated]);

    if (!isAuthenticated) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
