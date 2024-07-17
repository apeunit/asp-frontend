import { Heading, Text } from "@radix-ui/themes"
import { Chaos } from "../Illustrations/Illustrations"

import styles from "./EmptyCard.module.css"
import { TEMP_animationOptions } from "@/lib/utils"
import { motion } from "framer-motion"
// import Link from "next/link";

const EmptyCard = () => {
  return (
    <motion.div className={styles.card} {...TEMP_animationOptions}>
      <Heading size="6" weight={"regular"} className={styles.title}>
        Please enter a flight number
      </Heading>

      <Text size="3" className={styles.text}>
        Should multiple trips be displayed, please pay attention to the details to determine which trip is intended for
        you.
      </Text>

      <Chaos className={styles.illustration} />
    </motion.div>
  )
}

export default EmptyCard
