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
    redirectIfAuthenticated: "/verify-email",
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
          name="name"
          type="text"
          placeholder={"Vorname Nachname"}
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          autoFocus
          autoComplete={"name"}
          errorMessages={errors.name}
        />
        <InputField
          label="E-Mail"
          name="email"
          type="email"
          placeholder={"name@work-email.com"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoComplete={"email"}
          errorMessages={errors.email}
        />
        <InputField
          label="Phone"
          name="phone"
          type="text"
          placeholder={"+49 "}
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          errorMessages={errors.phone}
        />
        <InputField
          label="Personal Number"
          name="personalNumber"
          type="text"
          value={personalNumber}
          onChange={(event) => setPersonalNumber(event.target.value)}
          errorMessages={errors.personalNumber}
          required
        />
        <InputField
          label="Company Code"
          description="The Company Code is provided by your employer. If you don't have one, please contact your employer."
          name="companyCode"
          type="otp"
          expandable
          initiallyExpanded={false}
          value={companyCode}
          onChange={(value) => setCompanyCode(value)}
          errorMessages={errors.companyCode}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder={"Enter Password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          autoComplete="new-password"
          errorMessages={errors.password}
        />
        <InputField
          label="Confirm Password"
          name="passwordConfirmation"
          type="password"
          placeholder={"Confirm Password"}
          value={passwordConfirmation}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          required
          autoComplete="new-password"
          errorMessages={errors.password_confirmation}
        />
        <InputField
          label={
            <>
              <span>I agree to the </span>
              <Link href="/terms">Terms and Conditions</Link>
            </>
          }
          type="checkbox"
          required
          name="terms"
          errorMessages={errors.terms}
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
