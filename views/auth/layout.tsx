import styles from "./layout.module.css";

export const metadata = {
  title: "Pick-Up",
};

const Layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
