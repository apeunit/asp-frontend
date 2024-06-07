"use client";

import { useAuth } from "../../../hooks/auth";
import { useState } from "react";
import styles from "./Verify.module.css";
import { Button, Callout, Text } from "@radix-ui/themes";
import AuthCard from "../AuthCard/AuthCard";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const VerifyEmail = () => {
  const { logout, resendEmailVerification } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/dashboard",
  });

  const [status, setStatus] = useState(null);

  return (
    <AuthCard className={styles.card} title="Verify Your E-Mail">
      <Text size="3" align="center" className={styles.text}>
        Thanks for signing up! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn't receive the email, we will gladly send you another.
      </Text>

      {status === "verification-link-sent" && (
        <Callout.Root color="green">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            A new verification link has been sent to the email address address
            you provided during registration.
          </Callout.Text>
        </Callout.Root>
      )}

      <Button
        variant="solid"
        size="4"
        onClick={() => resendEmailVerification({ setStatus })}
      >
        Resend Verification Email
      </Button>
    </AuthCard>
  );
};

export default VerifyEmail;
