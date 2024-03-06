import { Heading, Link, Text } from "@radix-ui/themes";
import AuthCard from "./(auth)/AuthCard/AuthCard";

import styles from "./NotFound.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <AuthCard className={styles.card}>
        <Heading size={"8"} weight={"medium"}>
          404
        </Heading>
        <Text size={"3"}>Not Found</Text>

        <Link href={"/"}>Back to Dashboard</Link>
      </AuthCard>
    </div>
  );
};

export default NotFoundPage;
