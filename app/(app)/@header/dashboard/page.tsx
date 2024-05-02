"use client";

import Calendar from "@/components/shared/Calendar/Calendar";
import TripSearch from "@/components/shared/TripSearch/TripSearch";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/hooks/auth";
import { fetchTours } from "@/services/pickupApi";
import { toast } from "sonner";

const Header = () => {
  const { setTours, setLoading } = useApp();
  const { user } = useAuth({ middleware: "auth" });

  const handleSearchUpdate = async (query) => {
    try {
      const data = await fetchTours(query);

      setTours(data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
      setTours(null);
    }
  };

  return (
    <>
      <Calendar
        // TODO: type
        // customer
        // event-agency
        // company
        showFutureDays={user?.roles[0]?.slug !== "customer" ? 7 : 0}
        onDaySelect={() => console.log("select other day")}
      />
      <TripSearch onSearchUpdate={handleSearchUpdate} />
    </>
  );
};

export default Header;
