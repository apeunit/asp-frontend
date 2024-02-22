import { Text } from "@radix-ui/themes";

const Label = ({ className, children, ...props }: any) => (
  <Text as="label" size={"3"} {...props}>
    {children}
  </Text>
);

export default Label;
