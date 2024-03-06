"use client";

import InputError from "@/components/shared/InputError";
import Label from "@/components/shared/Label";
import { useAuth } from "../../../hooks/auth";
import { useState } from "react";

import styles from "./Register.module.css";

import {
  Button, Link,
  Text,
  TextField
} from "@radix-ui/themes";
import AuthCard from "../AuthCard/AuthCard";

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
        {/* Name */}
        <div className={styles.field}>
          <Label htmlFor="name">
            <Text weight="medium">Name</Text>
          </Label>

          <TextField.Input
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

          <InputError messages={errors.name} className="mt-2" />
        </div>

        {/* Email Address */}
        <div className={styles.field}>
          <Label htmlFor="email">
            <Text weight="medium">Email</Text>
          </Label>

          <TextField.Input
            id="email"
            type="email"
            placeholder={"name@work-email.com"}
            value={email}
            size={"3"}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete={"email"}
          />

          <InputError messages={errors.email} className="mt-2" />
        </div>

        {/* Phone */}
        <div className={styles.field}>
          <Label htmlFor="phone">
            <Text weight="medium">Phone</Text>
          </Label>

          <TextField.Input
            id="phone"
            type="text"
            placeholder={"+49 "}
            value={phone}
            size={"3"}
            onChange={(event) => setPhone(event.target.value)}
          />

          <InputError messages={errors.phone} className="mt-2" />
        </div>

        {/* Personal Number */}
        <div className={styles.field}>
          <Label htmlFor="personalNumber">
            <Text weight="medium">Personal Number</Text>
          </Label>

          <TextField.Input
            id="personalNumber"
            type="text"
            value={personalNumber}
            size={"3"}
            onChange={(event) => setPersonalNumber(event.target.value)}
          />

          <InputError messages={errors.personalNumber} className="mt-2" />
        </div>

        <div className={styles.field}>
          <Label htmlFor="companyCode">
            <Text weight="medium">Company Code</Text>
          </Label>

          <TextField.Input
            id="companyCode"
            type="text"
            value={companyCode}
            size={"3"}
            onChange={(event) => setCompanyCode(event.target.value)}
          />

          <InputError messages={errors.companyCode} className="mt-2" />
        </div>

        {/* Password */}
        <div className={styles.field}>
          <Label htmlFor="password">
            <Text weight="medium">Password</Text>
          </Label>

          <TextField.Input
            id="password"
            type="password"
            placeholder={"Enter Password"}
            value={password}
            size={"3"}
            onChange={(event) => setPassword(event.target.value)}
            required
            autoComplete="new-password"
          />

          <InputError messages={errors.password} className="mt-2" />
        </div>

        {/* Confirm Password */}
        <div className={styles.field}>
          <Label htmlFor="passwordConfirmation">
            <Text weight="medium">Confirm Password</Text>
          </Label>

          <TextField.Input
            id="passwordConfirmation"
            type="password"
            placeholder={"Confirm Password"}
            value={passwordConfirmation}
            size={"3"}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            required
            autoComplete="new-password"
          />

          <InputError messages={errors.password_confirmation} />
        </div>

        <div>
          <Button variant="solid" size="4" style={{ width: "100%" }}>
            Register
          </Button>
        </div>
      </form>

      <div className={styles.alternativeLinks}>
        Sie haben einen Account? <Link href="/login">Zum Login</Link>
      </div>
    </AuthCard>
  );
};

export default Page;
