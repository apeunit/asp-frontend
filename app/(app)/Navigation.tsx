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
import BackButton from "@/components/shared/BackButton/BackButton";

import { ArrowLeft, Dots } from "@/components/shared/Icons/Icons";
import IconButton from "@/components/shared/IconButton/IconButton";

const Navigation = ({ user }) => {
  const { logout } = useAuth();

  const [open, setOpen] = useState(false);

  return (
    <nav>
      {/* Primary Navigation Menu */}dsjdsj
      <div>
        <div>
          {/* Hamburger */}
          <IconButton>
            <ArrowLeft />
          </IconButton>
          <IconButton>
            <Dots />
          </IconButton>
          <div className="-mr-2 flex items-center sm:hidden">
            <button onClick={() => setOpen((open) => !open)} className="">
              Burger
            </button>
          </div>
        </div>
      </div>
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
