import Link from "next/link";
import styles from "./Button.module.css";
import classNames from "classnames";

type Button = {
  children: React.ReactNode;
  variant?: "primary";
  size?: "small" | "medium" | "large";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  target?: string;
};

const Button = ({
  children,
  variant,
  size = "medium",
  href,
  onClick,
  disabled,
  loading,
  icon,
  target,
  ...props
}: Button) => {
  const commonProps = {
    className: classNames(styles.button, styles[variant], styles[size]),
    ...props,
  };

  const iconElement = icon ? <span className={styles.icon}>{icon}</span> : null;

  if (href) {
    return (
      <Link href={href} target={target} {...commonProps}>
        {iconElement}
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      {...commonProps}
    >
      {iconElement}
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
