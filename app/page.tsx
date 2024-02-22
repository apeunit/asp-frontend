import LoginLinks from "@/components/shared/LoginLinks";
import { Card, Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";

import styles from "./Landing.module.css";

const Home = () => {
  return (
    <Card className={styles.card} variant="surface">
      <Flex direction="column" gap="4" align="center">
        <Image src="/favicon.png" width={72} height={72} alt="ASP App Icon" />
        <Heading size="8" weight="medium">
          Willkommen!
        </Heading>
        <LoginLinks />
      </Flex>
    </Card>
  );
};

export default Home;
