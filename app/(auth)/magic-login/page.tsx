"use client";

import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthSessionStatus from "../AuthSessionStatus";

import styles from "./Login.module.css";

import { Button, Link } from "@radix-ui/themes";
import AuthCard from "../AuthCard/AuthCard";
import InputField from "@/components/shared/InputField/InputField";

const Login = () => {
  const router = useRouter();

  const { sendMagicLink } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [email, setEmail] = useState("");
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

    sendMagicLink({
      email,
      remember: true,
      setErrors,
      setStatus,
    });
  };

  return (
    <AuthCard className={styles.card} title={"Willkommen!"}>
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

        <Button variant="solid" size="4">
          Send Login Link
        </Button>
      </form>

      <div>
        <p>
          Wir senden Ihnen einen Code per E-Mail, damit Sie sich ohne Passwort
          anmelden können. Oder Sie{" "}
          <a href="/login">melden sich stattdessen mit einem Passwort an.</a>
        </p>
      </div>

      <div className={styles.alternativeLinks}>
        Sie haben noch keinen Account?{" "}
        <Link href="/register">Jetzt registrieren</Link>
      </div>

      <AuthSessionStatus status={status} />
    </AuthCard>
  );
};

export default Login;
