"use client";

import { fetchToursByFlightNumber } from "../../../services/pickupApi";
import { useState } from "react";

import EmptyCard from "@/components/shared/EmptyCard/EmptyCard";
import Navigation from "../Navigation";
import { useAuth } from "@/hooks/auth";
import { toast } from "sonner";
import { AnimatePresence } from "framer-motion";
import ToursList from "@/components/shared/ToursList/ToursList";

const Dashboard = () => {
  const { user } = useAuth({ middleware: "auth" });

  const [flightNumber, setFlightNumber] = useState("");
  const [tours, setTours] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchUpdate = async (query) => {
    setTours(null); // Reset flight data on new submission
    setLoading(true);

    try {
      const data = await fetchToursByFlightNumber(query);

      console.log(data);
      setTours(data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation
        key={"navigation"}
        user={user}
        onSearchUpdate={handleSearchUpdate}
      />
      <AnimatePresence mode={"wait"}>
        {/* no tours */}
        {!tours && !loading && <EmptyCard />}

        {/* has one of multiple tours / list will handle single/multi display */}
        {tours && tours.tours.length > 0 && <ToursList tours={tours.tours} />}
      </AnimatePresence>
    </>
  );
};

export default Dashboard;
