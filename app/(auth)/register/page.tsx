"use client";

import Input from "@/components/shared/Input";
import InputError from "@/components/shared/InputError";
import Label from "@/components/shared/Label";
import { useAuth } from "../../../hooks/auth";
import { useState } from "react";

import styles from "./Register.module.css";

import {
  Button,
  Card,
  Flex,
  Heading,
  Link,
  Text,
  TextField,
} from "@radix-ui/themes";

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
    <Card className={styles.card} variant="surface">
      <Flex direction="column" gap="4" align="center">
        <img src="/favicon.png" width={72} alt="ASP App Icon" />
        <Heading size="8" weight="medium">
          Registration
        </Heading>
        <Text size="2">Please use the email address that you use at work.</Text>
        <form onSubmit={submitForm}>
          <Flex direction="column" gap="5" align="stretch">
            {/* Name */}
            <div>
              <Label htmlFor="name">
                <Text weight="medium">Name</Text>
              </Label>

              <TextField.Input
                id="name"
                type="text"
                value={name}
                className="block mt-1 w-full"
                onChange={(event) => setName(event.target.value)}
                required
                autoFocus
              />

              <InputError messages={errors.name} className="mt-2" />
            </div>

            {/* Email Address */}
            <div className="mt-4">
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
              />

              <InputError messages={errors.email} className="mt-2" />
            </div>

            {/* Phone */}
            <div className="mt-4">
              <Label htmlFor="phone">
                <Text weight="medium">Phone</Text>
              </Label>

              <TextField.Input
                id="phone"
                type="text"
                value={phone}
                className="block mt-1 w-full"
                onChange={(event) => setPhone(event.target.value)}
              />

              <InputError messages={errors.phone} className="mt-2" />
            </div>

            {/* Personal Number */}
            <div className="mt-4">
              <Label htmlFor="personalNumber">
                <Text weight="medium">Personal Number</Text>
              </Label>

              <TextField.Input
                id="personalNumber"
                type="text"
                value={personalNumber}
                className="block mt-1 w-full"
                onChange={(event) => setPersonalNumber(event.target.value)}
              />

              <InputError messages={errors.personalNumber} className="mt-2" />
            </div>

            <div className="mt-4">
              <Label htmlFor="companyCode">
                <Text weight="medium">Company Code</Text>
              </Label>

              <TextField.Input
                id="companyCode"
                type="text"
                value={companyCode}
                className="block mt-1 w-full"
                onChange={(event) => setCompanyCode(event.target.value)}
              />

              <InputError messages={errors.companyCode} className="mt-2" />
            </div>

            {/* Password */}
            <div>
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
                autoComplete="new-password"
              />

              <InputError messages={errors.password} className="mt-2" />
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="passwordConfirmation">
                <Text weight="medium">Confirm Password</Text>
              </Label>

              <TextField.Input
                id="passwordConfirmation"
                type="password"
                value={passwordConfirmation}
                className="block mt-1 w-full"
                onChange={(event) =>
                  setPasswordConfirmation(event.target.value)
                }
                required
              />

              <InputError messages={errors.password_confirmation} />
            </div>

            <div>
              <Button variant="solid" size="3" style={{ width: "100%" }}>
                Register
              </Button>
            </div>
          </Flex>
        </form>
      </Flex>
      <Flex justify={"center"} mt={"8"}>
        <Text size="1" align={"center"}>
          Du hast schon einen Account?{" "}
          <Link
            href="/login"
            className="underline text-sm text-gray-600 hover:text-gray-900"
          >
            Jetzt einloggen
          </Link>
        </Text>
      </Flex>
    </Card>
  );
};

export default Page;
