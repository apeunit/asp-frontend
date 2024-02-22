"use client";

import { useAuth } from "../../hooks/auth";
import Navigation from "./Navigation";
import Loading from "./Loading";

const AppLayout = ({ children }: any) => {
  const { user } = useAuth({ middleware: "auth" });

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation user={user} />

      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
