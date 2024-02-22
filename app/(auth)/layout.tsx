import Link from "next/link";
import AuthCard from "./AuthCard";

export const metadata = {
  title: "Laravel",
};

const Layout = ({ children }) => {
  return (
    <div>
      <div className="font-sans text-gray-900 antialiased">
        auth layout
        <AuthCard logo={<Link href="/">LOGO</Link>}>{children}</AuthCard>
      </div>
    </div>
  );
};

export default Layout;
