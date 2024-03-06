import classNames from "classnames";
import styles from "./InputField.module.css";

type InputField = {
  label: string;
  id?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  errorMessages?: string[];
};

const InputField = ({ label, ...props }) => {
  const {
    id = label,
    name = label,
    type = "text",
    value,
    onChange,
    required,
    errorMessages,
    className,
    ...rest
  } = props;

  const hasErrors = errorMessages && errorMessages.length > 0;

  return (
    <div
      className={classNames(
        styles.field,
        {
          [styles.hasErrors]: hasErrors,
        },
        className
      )}
    >
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
          {required && "*"}
        </label>
      )}

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
