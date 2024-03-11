import OtpInput from "react-otp-input";

import classNames from "classnames";
import styles from "./InputField.module.css";
import { ChevronUp } from "../Icons/Icons";
import { ReactNode, useState } from "react";

type InputField = {
  label: string | ReactNode;
  id?: string;
  name: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (any) => void;
  required?: boolean;
  className?: string;
  errorMessages?: string[];
  description?: string;
  expandable?: boolean;
  initiallyExpanded?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
};

const InputField = (props: InputField) => {
  const {
    label,
    name,
    id = name,
    type = "text",
    value,
    onChange,
    required,
    errorMessages,
    description,
    className,
    expandable,
    initiallyExpanded = false,
    ...rest
  } = props;

  const [expanded, setExpanded] = useState(initiallyExpanded);

  const hasErrors = errorMessages && errorMessages.length > 0;
  let input;

  switch (type) {
    case "otp":
      input = (
        <OtpInput
          value={value}
          onChange={onChange as any}
          numInputs={4}
          containerStyle={styles.otpContainer}
          inputStyle={classNames(styles.input, styles.otpInputs)}
          renderInput={(props) => <input {...props} />}
        />
      );
      break;
    default:
      input = (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className={styles.input}
          {...rest}
        />
      );
  }

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={classNames(
        styles.field,
        {
          [styles.hasErrors]: hasErrors,
        },
        className
      )}
      data-type={type}
    >
      {label && (
        <label
          className={classNames(styles.label, {
            [styles.expandable]: expandable,
            [styles.expanded]: expanded,
          })}
          htmlFor={id}
          onClick={expandable ? handleClick : undefined}
        >
          <span>{label}</span>
          {required && "*"}

          {expandable && (
            <span
              className={classNames(styles.expanderIcon, {
                [styles.expanded]: expanded,
              })}
            >
              <ChevronUp />
            </span>
          )}
        </label>
      )}

      {description && <p className={styles.description}>{description}</p>}

      {input}

      {errorMessages && (
        <div className={styles.error}>
          {errorMessages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputField;
