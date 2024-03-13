import { Box, Flex, Heading, Text } from "@radix-ui/themes";

import styles from "./Calendar.module.css";
import Day from "./Day";
import classNames from "classnames";
import { createArrayOfNumbers } from "@/lib/utils";

type Calendar = {
  className?: string;
  showFutureDays?: number;
  onDaySelect?: (day: Date) => void;
};

const Calendar = (props: Calendar) => {
  const { className, showFutureDays = 0, onDaySelect, ...rest } = props;

  // get current day
  const currentDate = new Date();

  // TODO: improve array creation
  const nextDays = createArrayOfNumbers(showFutureDays).map((day) => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + day);
    return nextDay;
  });

  const formattedDate = currentDate.toLocaleDateString("en-EN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box className={classNames(styles.calendar, className)} {...rest}>
      <Heading size="6" weight={"regular"} className={styles.todayHeadline}>
        {formattedDate}
      </Heading>

      {showFutureDays > 0 && (
        <div className={styles.days}>
          {nextDays.map((day, index) => {
            return (
              <Day
                day={day}
                isCurrent={index == 0}
                key={index}
                onClick={() => onDaySelect(day)}
              />
            );
          })}
        </div>
      )}
    </Box>
  );
};

export default Calendar;
