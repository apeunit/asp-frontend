"use client";

import { useAuth } from "../../../hooks/auth";
import { useState } from "react";

import styles from "./Register.module.css";

import { Button, Link, Text } from "@radix-ui/themes";
import AuthCard from "../AuthCard/AuthCard";
import InputField from "@/components/shared/InputField/InputField";

const Page = () => {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [personalNumber, setPersonalNumber] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState<any>([]);

  const submitForm = (event) => {
    event.preventDefault();

    register({
      name,
      email,
      phone,
      companyCode,
      personalNumber,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    });
  };

  return (
    <AuthCard className={styles.card} title={"Registration"}>
      <Text size="3" align="center" className={styles.text}>
        Please use the email address that you use at work.
      </Text>
      <form onSubmit={submitForm}>
        <InputField
          label="Name"
          id="name"
          type="text"
          placeholder={"Vorname Nachname"}
          value={name}
          size={"3"}
          onChange={(event) => setName(event.target.value)}
          required
          autoFocus
          autoComplete={"name"}
        />

        <InputField
          label="E-Mail"
          id="email"
          type="email"
          placeholder={"name@work-email.com"}
          value={email}
          size={"3"}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoComplete={"email"}
        />

        <InputField
          label="Phone"
          id="phone"
          type="text"
          placeholder={"+49 "}
          value={phone}
          size={"3"}
          onChange={(event) => setPhone(event.target.value)}
        />

        <InputField
          label="Phone"
          id="phone"
          type="text"
          placeholder={"+49 "}
          value={phone}
          size={"3"}
          onChange={(event) => setPhone(event.target.value)}
        />

        <InputField
          label="Personal Number"
          id="personalNumber"
          type="text"
          value={personalNumber}
          size={"3"}
          onChange={(event) => setPersonalNumber(event.target.value)}
        />

        <InputField
          label="Company Code"
          id="companyCode"
          type="text"
          value={companyCode}
          size={"3"}
          onChange={(event) => setCompanyCode(event.target.value)}
        />

        <InputField
          label="Password"
          id="password"
          type="password"
          placeholder={"Enter Password"}
          value={password}
          size={"3"}
          onChange={(event) => setPassword(event.target.value)}
          required
          autoComplete="new-password"
        />

        <InputField
          label="Confirm Password"
          id="passwordConfirmation"
          type="password"
          placeholder={"Confirm Password"}
          value={passwordConfirmation}
          size={"3"}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          required
          autoComplete="new-password"
        />

        <Button variant="solid" size="4">
          Register
        </Button>
      </form>

      <div className={styles.alternativeLinks}>
        Sie haben einen Account? <Link href="/login">Zum Login</Link>
      </div>
    </AuthCard>
  );
};

export default Page;
