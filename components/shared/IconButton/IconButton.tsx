import classNames from "classnames";
import styles from "./IconButton.module.css";

type IconButton = {
  className?: string;
  children: React.ReactNode;
};

const IconButton = ({ className, children, ...props }: IconButton) => {
  return (
    <button className={classNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
