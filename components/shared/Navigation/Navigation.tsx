import { usePathname, useRouter } from "next/navigation";
import IconButton from "../IconButton/IconButton";
import { ArrowLeft, Dots } from "../Icons/Icons";
import styles from "./Navigation.module.css";
import { useState } from "react";
import { useAuth } from "@/hooks/auth";
import { Button } from "@radix-ui/themes";

const Navigation = () => {
  const { user, logout } = useAuth({ middleware: "auth" });
  // TODO: move menu state to context
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // TODO: make less ugly & more robust
  const back = pathname.startsWith("/tour")
    ? () => {
        router.push("/dashboard");
      }
    : null;

  return (
    <>
      <header className={styles.container}>
        <div>
          {back && (
            <IconButton onClick={back}>
              <ArrowLeft />
            </IconButton>
          )}
        </div>
        {/* TODO: implement drop down menu */}
        <IconButton onClick={() => setOpen(!open)}>
          <Dots />
        </IconButton>
      </header>
      {/* Responsive Navigation Menu */}
      {open && (
        <div>
          <div>{user?.name}</div>
          <div>{user?.email}</div>

          {/* Authentication */}
          <Button onClick={logout}>Logout</Button>
        </div>
      )}
    </>
  );
};

export default Navigation;
