import { Box, Flex, Heading, Text } from "@radix-ui/themes";

import styles from "./Calendar.module.css";
import Day from "./Day";
import classNames from "classnames";
import { createArrayOfNumbers } from "@/lib/utils";
import { useApp } from "@/context/AppContext";

type Calendar = {
  className?: string;
  showFutureDays?: number;
  onDaySelect?: (day: Date) => void;
};

const Calendar = (props: Calendar) => {
  const { className, showFutureDays = 0, onDaySelect, ...rest } = props;
  const { tours } = useApp();

  // get current day
  const currentDate = new Date();

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
                hasTrips={tours?.tours?.some((tour) => {
                  // if day of abfahrtzeit is equal to day
                  return (
                    new Date(tour.abfahrtzeit).toLocaleDateString() ===
                    day.toLocaleDateString()
                  );
                })}
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
