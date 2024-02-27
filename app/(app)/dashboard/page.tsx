import Header from "../Header";

import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Heading,
  Link,
  Text,
  TextField,
} from "@radix-ui/themes";

import styles from "./Dashboard.module.css";

export const metadata = {
  title: "Pick-Up - Dashboard",
};

const Dashboard = () => {
  return (
    <>
      <Card className={styles.card} variant="surface">
        <Flex direction="column" gap="4" align="center">
          <img src="/favicon.png" width={72} alt="ASP App Icon" />
          <Heading size="8" weight="medium">
            TEST Data!
          </Heading>
        </Flex>
      </Card>
    </>
  );
};

export default Dashboard;
