import React from "react";
import { useAuth } from "../hooks/auth";

type Props = {
  children: React.ReactNode;
};

export const Protected = React.memo(({ children }: Props) => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    // ログイン画面にリダイレクト
    return <div>protected</div>;
  }

  return <>{children}</>;
});
