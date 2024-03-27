import { Heading, Text } from "@radix-ui/themes";
import { CarAppLocation } from "../Illustrations/Illustrations";

import styles from "./NoSearchResultsCard.module.css";
import { TEMP_animationOptions } from "@/lib/utils";
import { motion } from "framer-motion";

const EmptyCard = () => {
  return (
    <motion.div className={styles.card} {...TEMP_animationOptions}>
      <Heading size="6" weight={"regular"} className={styles.title}>
        Sorry, no results...
      </Heading>

      <Text size="3" className={styles.text}>
        Please note that only trips in the next 24
        hours are displayed.
      </Text>

      <CarAppLocation className={styles.illustration} />
    </motion.div>
  );
};

export default EmptyCard;
