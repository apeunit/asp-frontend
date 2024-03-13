"use client";


import EmptyCard from "@/components/shared/EmptyCard/EmptyCard";
import { useAuth } from "@/hooks/auth";
import { AnimatePresence } from "framer-motion";
import ToursList from "@/components/shared/ToursList/ToursList";
import { useApp } from "@/context/AppContext";

const Dashboard = () => {
  const { user } = useAuth({ middleware: "auth" });

  const { tours, loading } = useApp();

  console.log(tours, loading);

  return (
    <>
      <AnimatePresence mode={"wait"}>
        {/* no tours */}
        {(!tours || tours.tours.length < 1) && !loading && <EmptyCard />}

        {/* has one of multiple tours / list will handle single/multi display */}
        {tours && tours.tours && tours.tours.length > 0 && (
          <ToursList query={tours.flightNumber} tours={tours.tours} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Dashboard;
