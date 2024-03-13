import classNames from "classnames";
import { ReactNode } from "react";

import styles from "./Callout.module.css";

type Callout = {
  /*TODO: implement styles other than neutral */
  color: string | "neutral";
  className?: string;
  icon?: any;
  children: ReactNode;
};

const Callout = (props: Callout) => {
  const { color, className, icon, children } = props;

  const Icon = icon;

  return (
    <div
      className={classNames(
        styles.callout,
        styles[color],
        {
          [styles.hasIcon]: icon,
        },
        className
      )}
    >
      {icon && <Icon className={styles.icon} />}
      <div>{children}</div>
    </div>
  );
};

export default Callout;
