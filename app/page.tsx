"use client";

import { useAuth } from "@/hooks/auth";
import { redirect } from "next/navigation";

const Home = () => {
  const { user } = useAuth({ middleware: "auth" });

  if (user) {
    redirect("/dashboard");
  }

  return null;
};

export default Home;
