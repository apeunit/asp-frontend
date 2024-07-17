import { Box, Text } from "@radix-ui/themes";

import classNames from "classnames";

import styles from "./Day.module.css";

type Day = {
  day: Date;
  isCurrent?: boolean;
  hasTrips?: boolean;
  className?: string;
  onClick?: () => void;
};

const Day = (props: Day) => {
  const { day, isCurrent, hasTrips = false, className, ...rest } = props;

  return (
    <button
      className={classNames(styles.day, className, {
        [styles.isCurrent]: isCurrent,
        [styles.hasTrips]: hasTrips,
      })}
      {...rest}
    >
      <Text size="3" className={styles.label}>
        {day.toLocaleDateString("en-EN", { weekday: "short" })}
      </Text>
      <Text size="6" weight={"bold"} className={styles.number}>
        {day.getDate().toString().padStart(2, "0")}
      </Text>
      <div className={styles.hasTripsIndicator} />
    </button>
  );
};

export default Day;
