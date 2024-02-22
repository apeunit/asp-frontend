"use client";

import InputError from "@/components/shared/InputError";
import Label from "@/components/shared/Label";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthSessionStatus from "../AuthSessionStatus";

import {
  Button,
  Card,
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
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (router.reset?.length > 0 && errors.length === 0) {
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
      <AuthSessionStatus className="mb-4" status={status} />
      <Card style={{ maxWidth: 390, padding: 16 }}>
        <Flex direction="column" gap="4" align="center" padding={4}>
          <img src="/images/asp-app-icon.png" width={72} alt="ASP App Icon" />
          <Heading mb="2" size="6">
            Willkommen!
          </Heading>
          <form style={{ width: "100%" }} onSubmit={submitForm}>
            <Flex direction="column" gap="4" align="stretch" padding={4}>
              {/* Email Address */}
              <div>
                <Label htmlFor="email">
                  <Text weight="medium">Email</Text>
                </Label>

                <TextField.Input
                  id="email"
                  type="email"
                  value={email}
                  className="block mt-1 w-full"
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
                  value={password}
                  className="block mt-1 w-full"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="current-password"
                />

                <InputError messages={errors.password} className="mt-2" />
              </div>

              {/* Remember Me */}
              <div className="block mt-4">
                <label
                  htmlFor="remember_me"
                  className="inline-flex items-center"
                >
                  <input
                    id="remember_me"
                    type="checkbox"
                    name="remember"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={(event) =>
                      setShouldRemember(event.target.checked)
                    }
                  />

                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
              </div>

              <div>
                <Link
                  href="/forgot-password"
                  className="underline text-sm text-gray-600 hover:text-gray-900"
                >
                  Forgot your password?
                </Link>
              </div>
              <div>
                <Button variant="solid" size="3" style={{ width: "100%" }}>
                  Login
                </Button>
              </div>
            </Flex>
          </form>
        </Flex>
      </Card>
    </>
  );
};

export default Login;
