import { Heading, Text } from "@radix-ui/themes";
import { Chaos } from "../Illustrations/Illustrations";

import styles from "./EmptyCard.module.css";
import { TEMP_animationOptions } from "@/lib/utils";
import { motion } from "framer-motion";

const EmptyCard = () => {
  return (
    <motion.div className={styles.card} {...TEMP_animationOptions}>
      <Heading size="6" weight={"regular"}>
        Bitte gib eine Flugnummer ein
      </Heading>

      <Text size="3" className={styles.text}>
        Schau im Kalender nach zukünftig geplanten Fahrten.
      </Text>
      <Chaos className={styles.illustration} />
    </motion.div>
  );
};

export default EmptyCard;
