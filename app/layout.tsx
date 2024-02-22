import "@radix-ui/themes/styles.css";
import "@/styles/global.css";

import { Theme } from "@radix-ui/themes";

import Image from "next/image";

import styles from "./layout.module.css";

export const metadata = {
  title: "Pick-Up",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="de">
      <body>
        <Image
          className={styles.background}
          src="/images/bg.jpg"
          alt="ASP App Icon"
          width={1920}
          height={1080}
        />
        <div className={styles.overlay} />
        <Theme
          accentColor="blue"
          grayColor="gray"
          panelBackground="solid"
          radius="large"
          scaling="110%"
        >
          <div className={styles.container}>{children}</div>
        </Theme>
      </body>
    </html>
  );
};

export default RootLayout;
