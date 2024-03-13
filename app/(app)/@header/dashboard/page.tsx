"use client";

import Calendar from "@/components/shared/Calendar/Calendar";
import TripSearch from "@/components/shared/TripSearch/TripSearch";
import { useApp } from "@/context/AppContext";
import { fetchToursByFlightNumber } from "@/services/pickupApi";
import { toast } from "sonner";

const Header = () => {
  const { setTours, setLoading } = useApp();

  const handleSearchUpdate = async (query) => {
    try {
      const data = await fetchToursByFlightNumber(query);

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
      <Calendar />
      <TripSearch onSearchUpdate={handleSearchUpdate} />
    </>
  );
};

export default Header;
