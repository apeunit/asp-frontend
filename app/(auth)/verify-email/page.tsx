"use client";

import { useAuth } from "../../../hooks/auth";
import { useState } from "react";
import styles from "./Verify.module.css";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Heading,
  Link,
  Text,
  TextField,
} from "@radix-ui/themes";

const Page = () => {
  const { logout, resendEmailVerification } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/dashboard",
  });

  const [status, setStatus] = useState(null);

  return (
    <>
      <Card className={styles.card} variant="surface">
        <Flex direction="column" gap="4" align="center">
          <img src="/favicon.png" width={72} alt="ASP App Icon" />
          <Heading size="6" weight="medium">
            Email Verification!
          </Heading>
          <div className="mb-4 text-sm text-gray-600">
            Thanks for signing up! Before getting started, could you verify
            verify your email address by clicking on the link we just emailed to
            you? If you didn't receive the email, we will gladly send you
            another.
          </div>

          {status === "verification-link-sent" && (
            <div className="mb-4 font-medium text-sm text-green-600">
              A new verification link has been sent to the email address address
              you provided during registration.
            </div>
          )}

          <div className="mt-4 flex items-center justify-between">
            <Button onClick={() => resendEmailVerification({ setStatus })}>
              Resend Verification Email
            </Button>
          </div>
        </Flex>
      </Card>
    </>
  );
};

export default Page;
