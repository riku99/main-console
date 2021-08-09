import React from "react";
import { useAuth } from "../hooks/auth";
import { Redirect } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const Protected = React.memo(({ children }: Props) => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
});
