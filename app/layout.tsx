import "@radix-ui/themes/styles.css";
import "@/app/global.css";

import { Theme } from "@radix-ui/themes";

export const metadata = {
  title: "Laravel",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="antialiased light">
        <Theme
          accentColor="blue"
          grayColor="gray"
          radius="large"
          scaling="110%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
};

export default RootLayout;
