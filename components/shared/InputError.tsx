// TODO: rework
import { Text } from "@radix-ui/themes";

const InputError = ({ messages = [], className = "" }: any) => (
  <>
    {messages.length > 0 && (
      <>
        {messages.map((message, index) => (
          <Text size="2" color="red" className={`${className}`} key={index}>
            {message}
          </Text>
        ))}
      </>
    )}
  </>
);

export default InputError;
