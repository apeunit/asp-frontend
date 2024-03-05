import ApplicationLogo from "@/components/shared/ApplicationLogo";
import Dropdown from "@/components/shared/Dropdown";
import Link from "next/link";
import NavLink from "@/components/shared/NavLink";
import ResponsiveNavLink, {
  ResponsiveNavButton,
} from "@/components/shared/ResponsiveNavLink";
import { DropdownButton } from "@/components/shared/DropdownLink";
import { useAuth } from "../../hooks/auth";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ArrowLeft, Dots } from "@/components/shared/Icons/Icons";
import IconButton from "@/components/shared/IconButton/IconButton";
import { Box, Flex } from "@radix-ui/themes";
import Calendar from "@/components/shared/Calendar/Calendar";
import TripSearch from "@/components/shared/TripSearch/TripSearch";

import styles from "./Navigation.module.css";

type Navigation = {
  onSearchUpdate: (query: string) => void;
};

const Navigation = ({ user, onSearchUpdate }) => {
  const { logout } = useAuth();

  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <header>
        <Flex justify={"between"}>
          <IconButton>
            <ArrowLeft />
          </IconButton>
          <IconButton onClick={() => setOpen((open) => !open)}>
            <Dots />
          </IconButton>
        </Flex>
      </header>
      <Calendar
        showFutureDays={5}
        onDaySelect={(day) => console.log("day selection", day)}
      />
      <TripSearch onSearchUpdate={onSearchUpdate} />
      {/* Responsive Navigation Menu */}
      {open && (
        <div className="block sm:hidden">
          {/* Responsive Settings Options */}
          <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="ml-3">
                <div className="font-medium text-base text-gray-800">
                  {user?.name}
                </div>
                <div className="font-medium text-sm text-gray-500">
                  {user?.email}
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-1">
              {/* Authentication */}
              <ResponsiveNavButton onClick={logout}>Logout</ResponsiveNavButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
