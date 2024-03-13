import classNames from "classnames";
import { ReactNode } from "react";

import styles from "./Callout.module.css";
import { motion } from "framer-motion";

type Callout = {
  /*TODO: implement styles other than neutral */
  color: string | "neutral";
  className?: string;
  icon?: any;
  children: ReactNode;
};

const Callout = (props: Callout) => {
  const { color, className, icon, children, ...rest } = props;

  const Icon = icon;

  return (
    <motion.div
      className={classNames(
        styles.callout,
        styles[color],
        {
          [styles.hasIcon]: icon,
        },
        className
      )}
      {...rest}
    >
      {icon && <Icon className={styles.icon} />}
      <div>{children}</div>
    </motion.div>
  );
};

export default Callout;
