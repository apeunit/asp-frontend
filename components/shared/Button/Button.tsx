import Link from "next/link";
import styles from "./Button.module.css";
import classNames from "classnames";

type Button = {
  children: React.ReactNode;
  variant?: "primary";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
};

const Button = ({
  children,
  variant,
  href,
  onClick,
  disabled,
  loading,
  icon,
  ...props
}: Button) => {
  const commonProps = {
    className: classNames(styles.button, styles[variant]),
    ...props,
  };

  const iconElement = icon ? <span className={styles.icon}>{icon}</span> : null;

  if (href) {
    return (
      <Link href={href} {...commonProps}>
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
