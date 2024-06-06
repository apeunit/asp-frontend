import { Tour } from "@/types";
import TourCard from "../TourCard/TourCard";
import { motion } from "framer-motion";
import { TEMP_animationOptions } from "@/lib/utils";

import styles from "./ToursList.module.css";
import { Heading } from "@radix-ui/themes";

type ToursList = {
  tours: Tour[];
  query?: string;
};
const ToursList = (props: ToursList) => {
  const { tours, query } = props;

  // console.log(
  //   "zeiten",
  //   tours.map((tour) => tour.abfahrtzeit)
  // );

  return (
    <motion.div className={styles.list} {...TEMP_animationOptions}>
      <Heading weight={"medium"}>
        Upcoming Trips
        {query && (
          <>
            {" "}
            for <span className={styles.flightNo}>{query}</span>
          </>
        )}
      </Heading>

      {tours.map((tour, index) => (
        <TourCard key={index} tour={tour} flight={query} />
      ))}
    </motion.div>
  );
};

export default ToursList;
