"use client";

import { useAuth } from "../../../hooks/auth";
import { useState } from "react";
import AuthCard from "../AuthCard/AuthCard";

import { Button, Link, Text } from "@radix-ui/themes";

import styles from "./ForgotPassword.module.css";
import InputField from "@/components/shared/InputField/InputField";

const Page = () => {
  const { forgotPassword } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<any>([]);
  const [status, setStatus] = useState(null);

  const submitForm = (event) => {
    event.preventDefault();

    forgotPassword({ email, setErrors, setStatus });
  };

  return (
    <AuthCard className={styles.card} title={"Forgot Password?"}>
      <Text size="3" align="center" className={styles.text}>
        No problem. Just let us know your email email address and we will email
        you a password reset link that that will allow you to choose a new one.
      </Text>

      <form onSubmit={submitForm}>
        <InputField
          label="E-Mail"
          id="email"
          type="email"
          size={"3"}
          placeholder={"name@work-email.com"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoFocus
        />

        <Button variant="solid" size="4">
          Email Password Reset Link
        </Button>

        <Button variant="soft" size="4">
          <Link href="/login">Back to Login</Link>
        </Button>
      </form>

      <div className={styles.alternativeLinks}>
        Sie haben noch keinen Account?{" "}
        <Link href="/register">Jetzt registrieren</Link>
      </div>
    </AuthCard>
  );
};

export default Page;
