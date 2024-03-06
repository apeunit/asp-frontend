'use client'

import InputError from "@/components/shared/InputError";
import Label from "@/components/shared/Label";
import { useAuth } from "../../../../hooks/auth";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Button, Text, TextField } from "@radix-ui/themes";

import styles from "./PasswordReset.module.css";
import AuthCard from "../../AuthCard/AuthCard";

const PasswordReset = () => {
  const searchParams = useSearchParams();

  const { resetPassword } = useAuth({ middleware: "guest" });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState<any>([]);
  const [status, setStatus] = useState(null);

  const submitForm = (event) => {
    event.preventDefault();

    resetPassword({
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
      setStatus,
    });
  };

  useEffect(() => {
    setEmail(searchParams.get("email"));
  }, [searchParams.get("email")]);

  return (
    <AuthCard className={styles.card} title={"Reset Password"}>
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

        <Button variant="solid" size="4">
          Save New Password
        </Button>
      </form>
    </AuthCard>
  );
};

export default PasswordReset;
