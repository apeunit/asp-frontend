import { motion } from "framer-motion";
import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.css";
import { TEMP_animationOptions } from "@/lib/utils";

const Header = ({ children }) => {
  return (
    <motion.div layout className={styles.header} {...TEMP_animationOptions}>
      <Navigation />
      {children}
    </motion.div>
  );
};

export default Header;
