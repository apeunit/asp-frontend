import { Tour } from "@/types";
import TourCard from "../TourCard/TourCard";
import { motion } from "framer-motion";
import { TEMP_animationOptions } from "@/lib/utils";

import styles from "./ToursList.module.css";
import { Heading } from "@radix-ui/themes";

const ToursList = ({ tours }: { tours: Tour[] }) => {
  return (
    <motion.div className={styles.list} {...TEMP_animationOptions}>
      <Heading weight={"medium"}>Upcoming Trips</Heading>
      {tours.map((tour, index) => (
        <TourCard
          key={index}
          tour={tour}
          initiallyExpanded={tours.length == 1}
        />
      ))}
    </motion.div>
  );
};

export default ToursList;
