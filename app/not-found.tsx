import { Heading, Link, Text } from "@radix-ui/themes";
import AuthCard from "./(auth)/AuthCard/AuthCard";

const NotFoundPage = () => {
  return (
    <AuthCard>
      <Heading size={"8"} weight={"medium"}>
        404
      </Heading>
      <Text size={"3"}>Not Found</Text>

      <Link href={"/"}>Back to Dashboard</Link>
    </AuthCard>
  );
};

export default NotFoundPage;
