import { Text } from "@radix-ui/themes";

const Label = ({ className, children, ...props }: any) => (
  <Text as="label" {...props}>
    {children}
  </Text>
);

export default Label;
