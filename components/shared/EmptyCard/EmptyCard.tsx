import { Heading, Text } from "@radix-ui/themes";
import { Chaos } from "../Illustrations/Illustrations";

import styles from "./EmptyCard.module.css";

const EmptyCard = () => {
  return (
    <div className={styles.card}>
      <Heading size="6" weight={"regular"}>
        Bitte gib eine Flugnummer ein
      </Heading>

      <Text size="3" className={styles.text}>
        Schau im Kalender nach zukünftig geplanten Fahrten.
      </Text>
      <Chaos className={styles.illustration} />
    </div>
  );
};

export default EmptyCard;
