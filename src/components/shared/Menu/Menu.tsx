import { useAuth } from "../../../hooks/auth";
import styles from "./Menu.module.css";
import { Info, Logout, Phone, Privacy, Settings } from "../Icons/Icons";
import { motion } from "framer-motion";
import { TEMP_animationOptions } from "@/lib/utils";

const MenuItem = (props) => {
  const { label, icon, href, disabled, onClick } = props;
  const Icon = icon;

  return (
    <li className={styles.item}>
      <a
        href={disabled ? null : href}
        onClick={onClick}
        target={href ? "_blank" : undefined}
        data-disabled={disabled ? "disabled" : undefined}
      >
        <span>{label}</span>
        {icon && <Icon className={styles.icon} />}
      </a>
    </li>
  );
};
const Menu = () => {
  const { logout, user } = useAuth();

  const items = [
    {
      label: "Contact us",
      href: "tel:+301234567890",
      icon: Phone,
    },
    {
      label: "Imprint",
      href: "https://www.asp-ber.de/impressum/",
      icon: Info,
    },
    {
      label: "Privacy Policy",
      href: "https://www.asp-ber.de/datenschutz/",
      icon: Privacy,
    },
    {
      label: "Settings",
      disabled: true,
      icon: Settings,
    },
    {
      label: "Logout",
      onClick: logout,
      icon: Logout,
    },
  ];

  const MENU_ANIMATION = {
    initial: { opacity: 0, y: 3 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  };

  return (
    <motion.nav className={styles.menu} {...MENU_ANIMATION}>
      <div className={styles.user}>
        {user.name && <h3>{user.name}</h3>}
        {user.email && <p>{user.email}</p>}
      </div>
      {items && (
        <ul>
          {items.map((item, key) => (
            <MenuItem key={key} {...item} />
          ))}
        </ul>
      )}
    </motion.nav>
  );
};

export default Menu;
