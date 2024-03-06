import { Heading } from "@radix-ui/themes";
import styles from "./AuthCard.module.css";
import Image from "next/image";
import classNames from "classnames";
import { ReactNode } from "react";

type AuthCard = {
  title?: string;
  className?: string;
  children: ReactNode;
};

const AuthCard = ({ title, className, children }: AuthCard) => (
  <div className={classNames(styles.card, className)}>
    <Image
      src="/app-icon.png"
      width={72}
      height={72}
      alt="ASP App Icon"
      priority
    />

    {title && (
      <Heading size="8" weight="medium">
        {title}
      </Heading>
    )}

    {children}
  </div>
);

export default AuthCard;
