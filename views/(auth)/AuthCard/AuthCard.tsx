"use client";

import { Heading } from "@radix-ui/themes";
import styles from "./AuthCard.module.css";
import Image from "next/image";
import classNames from "classnames";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { TEMP_animationOptions } from "@/lib/utils";

type AuthCard = {
  title?: string;
  className?: string;
  children: ReactNode;
};

const AuthCard = ({ title, className, children }: AuthCard) => (
  <motion.div
    className={classNames(styles.card, className)}
    {...TEMP_animationOptions}
  >
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
  </motion.div>
);

export default AuthCard;
