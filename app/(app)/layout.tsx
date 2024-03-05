"use client";

import { useAuth } from "../../hooks/auth";
import Navigation from "./Navigation";
import Loading from "./Loading";

import styles from "./layout.module.css";

const AppLayout = ({ children }: any) => {
  const { user } = useAuth({ middleware: "auth" });

  if (!user) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
