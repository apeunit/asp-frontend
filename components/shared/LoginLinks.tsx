"use client";

import { useAuth } from "@/hooks/auth";
import { Button, Card, Flex } from "@radix-ui/themes";
import Link from "next/link";

const LoginLinks = () => {
  const { user } = useAuth({ middleware: "guest" });

  console.log("user", user);
  return (
    <Flex gap={"4"} mb={"3"}>
      <Link href="/dashboard">
        <Button>Login</Button>
      </Link>
      <Link href="/register">
        <Button variant={"soft"}>Register</Button>
      </Link>
    </Flex>
  );
};

export default LoginLinks;
