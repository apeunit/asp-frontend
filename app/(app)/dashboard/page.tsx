"use client";

import EmptyCard from "@/components/shared/EmptyCard/EmptyCard";
import NoSearchResultsCard from "@/components/shared/NoSearchResultsCard/NoSearchResultsCard";
import { useAuth } from "@/hooks/auth";
import { AnimatePresence } from "framer-motion";
import ToursList from "@/components/shared/ToursList/ToursList";
import { useApp } from "@/context/AppContext";
import { useEffect } from "react";
import { fetchTours } from "@/services/pickupApi";

const Dashboard = () => {
  const { user } = useAuth({ middleware: "auth" });

  const { tours, loading } = useApp();

  console.log(user, tours, loading);
  useEffect(() => {
    console.log("Dashboard useEffect");

    if (user.roles[0].slug === "company") {
      console.log("fetchToursByFlightNumber");
      fetchTours();
    }
  }, []);

  return (
    <>
      <AnimatePresence mode={"wait"}>
        {/* Start screen  */}
        {!tours && !loading && <EmptyCard />}

        {tours && tours.tours.length < 1 && !loading && <NoSearchResultsCard />}

        {/* has one of multiple tours / list will handle single/multi display */}
        {tours && tours.tours && tours.tours.length > 0 && (
          <ToursList query={tours.flightNumber} tours={tours.tours} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Dashboard;
