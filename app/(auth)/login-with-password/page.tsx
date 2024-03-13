"use client";

import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthSessionStatus from "../AuthSessionStatus";

import styles from "./LoginWithPassword.module.css";

import { Button, Link } from "@radix-ui/themes";
import AuthCard from "../AuthCard/AuthCard";
import InputField from "@/components/shared/InputField/InputField";

const Login = () => {
  const router = useRouter();

  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // @ts-ignore
    if (router.reset?.length > 0 && errors.length === 0) {
      // @ts-ignore
      setStatus(atob(router.reset));
    } else {
      setStatus(null);
    }
  });

  const submitForm = async (event) => {
    event.preventDefault();

    login({
      email,
      password,
      remember: true,
      setErrors,
      setStatus,
    });
  };

  return (
    <AuthCard className={styles.card} title={"Welcome!"}>
      <form onSubmit={submitForm}>
        {/* Email Address */}
        <InputField
          label="E-Mail"
          name="email"
          type="email"
          placeholder={"name@work-email.com"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          errorMessages={errors.email}
          className={styles.field}
          required
          autoFocus
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder={"Enter Password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          errorMessages={errors.password}
          autoComplete="current-password"
        />

        <Link href="/forgot-password" className={styles.forgotPassword}>
          Forgot password?
        </Link>

        <Button variant="solid" size="4">
          Log In
        </Button>
      </form>

      <div className={styles.alternativeLinks}>
        Don't have an account yet?{" "}
        <Link href="/register">Register now</Link>
      </div>

      <AuthSessionStatus status={status} />
    </AuthCard>
  );
};

export default Login;
