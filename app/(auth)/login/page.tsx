"use client";

import InputError from "@/components/shared/InputError";
import Label from "@/components/shared/Label";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthSessionStatus from "../AuthSessionStatus";

import styles from "./Login.module.css";

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

const Login = () => {
  const router = useRouter();

  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);
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
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };

  return (
    <>
      <AuthSessionStatus status={status} />
      <Card className={styles.card} variant="surface">
        <Flex direction="column" gap="4" align="center">
          <img src="/favicon.png" width={72} alt="ASP App Icon" />
          <Heading size="8" weight="medium">
            Willkommen!
          </Heading>
          <form onSubmit={submitForm}>
            <Flex direction="column" gap="5" align="stretch">
              {/* Email Address */}
              <div>
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
              <div className="mt-4">
                <Label htmlFor="password">
                  <Text weight="medium">Password</Text>
                </Label>

                <TextField.Input
                  id="password"
                  type="password"
                  size={"3"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="current-password"
                />

                <InputError messages={errors.password} className="mt-2" />
              </div>

              {/* Remember Me */}
              <Flex direction="row" gap="4" align="stretch" justify={"between"}>
                <Flex gap={"1"} align={"center"}>
                  <Checkbox
                    size={"2"}
                    id="remember_me"
                    name="remember"
                    onChange={(event: any) =>
                      setShouldRemember(event.target.checked)
                    }
                  />

                  <Label for="remember_me">Remember me</Label>
                </Flex>

                <Link href="/forgot-password">Forgot password?</Link>
              </Flex>
              <div>
                <Button variant="solid" size="3" style={{ width: "100%" }}>
                  Login
                </Button>
              </div>
            </Flex>
          </form>
        </Flex>
        <Flex justify={"center"} mt={"8"}>
          <Text size="1" align={"center"}>
            Du hast noch keinen Account?{" "}
            <Link href="/register">Jetzt registrieren</Link>
          </Text>
        </Flex>
      </Card>
    </>
  );
};

export default Login;
