import { useAuth } from "../../hooks/auth";
import { useState } from "react";

import { ArrowLeft, Dots } from "@/components/shared/Icons/Icons";
import IconButton from "@/components/shared/IconButton/IconButton";
import { Button, Flex } from "@radix-ui/themes";
import Calendar from "@/components/shared/Calendar/Calendar";
import TripSearch from "@/components/shared/TripSearch/TripSearch";

import styles from "./Navigation.module.css";
import Header from "@/components/shared/Navigation/Navigation";

type Navigation = {
  onSearchUpdate: (query: string) => void;
};

const Navigation = ({ user, onSearchUpdate }) => {
  const { logout } = useAuth();

  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <Header />
      <Calendar
        showFutureDays={0}
        onDaySelect={(day) => console.log("day selection", day)}
      />
      <TripSearch onSearchUpdate={onSearchUpdate} />

      {/* Responsive Navigation Menu */}
      {open && (
        <div>
          <div>{user?.name}</div>
          <div>{user?.email}</div>

          {/* Authentication */}
          <Button onClick={logout}>Logout</Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
