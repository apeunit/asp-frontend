"use client";

import InputError from "@/components/shared/InputError";
import Label from "@/components/shared/Label";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthSessionStatus from "../AuthSessionStatus";

import styles from "./Login.module.css";

import { Button, Link, Text, TextField } from "@radix-ui/themes";
import AuthCard from "../AuthCard/AuthCard";

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
    <AuthCard className={styles.card} title={"Willkommen!"}>
      <form onSubmit={submitForm}>
        {/* Email Address */}
        <div className={styles.field}>
          <Label htmlFor="email">
            <Text weight="medium">Email</Text>
          </Label>

          <TextField.Input
            id="email"
            type="email"
            size={"3"}
            placeholder={"name@work-email.com"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoFocus
          />

          <InputError messages={errors.email} className="mt-2" />
        </div>

        {/* Password */}
        <div className={styles.field}>
          <Label htmlFor="password">
            <Text weight="medium">Password</Text>
          </Label>

          <TextField.Input
            id="password"
            type="password"
            size={"3"}
            placeholder={"Enter Password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            autoComplete="current-password"
          />

          <InputError messages={errors.password} className="mt-2" />
        </div>

        <Link href="/forgot-password" className={styles.forgotPassword}>
          Forgot password?
        </Link>

        <Button variant="solid" size="4">
          Log In
        </Button>
      </form>

      <div className={styles.alternativeLinks}>
        Sie haben noch keinen Account?{" "}
        <Link href="/register">Jetzt registrieren</Link>
      </div>

      <AuthSessionStatus status={status} />
    </AuthCard>
  );
};

export default Login;
