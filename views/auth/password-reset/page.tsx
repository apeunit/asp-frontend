import { useEffect, useState } from "react";
import { Button } from "@radix-ui/themes";
import styles from "./PasswordReset.module.css";
import InputField from "@/components/shared/InputField/InputField";
import { useParams } from "react-router-dom";
import { useAuth } from "@/hooks/auth";
import AuthCard from "../AuthCard/AuthCard";

const PasswordReset = () => {
  const params = useParams()
  const { email: tokeEmail } = params
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
    setEmail(tokeEmail);
  }, [tokeEmail]);

  return (
    <AuthCard className={styles.card} title={"Reset Password"}>
      <form onSubmit={submitForm}>
        <InputField
          label="E-Mail"
          name="email"
          type="email"
          placeholder={"name@work-email.com"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoFocus
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
        />

        <Button variant="solid" size="4">
          Save New Password
        </Button>
      </form>
    </AuthCard>
  );
};

export default PasswordReset;
