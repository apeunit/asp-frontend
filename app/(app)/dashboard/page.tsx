"use client";

import { fetchToursByFlightNumber } from "../../../services/pickupApi";
import { useState } from "react";
import { Card, Flex, Heading } from "@radix-ui/themes";

import styles from "./Dashboard.module.css";
import Link from "next/link";
import EmptyCard from "@/components/shared/EmptyCard/EmptyCard";
import Navigation from "../Navigation";
import { useAuth } from "@/hooks/auth";
import { toast } from "sonner";
import TourDetailCard from "@/components/shared/TourDetailCard/TourDetailCard";
import { AnimatePresence, motion } from "framer-motion";
import { TEMP_animationOptions } from "@/lib/utils";

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
    <AnimatePresence mode={"sync"}>
      <Navigation
        key={"navigation"}
        user={user}
        onSearchUpdate={handleSearchUpdate}
      />

      {!tours && !loading && <EmptyCard />}
      {tours && tours.tours && (
        <motion.div className={styles.tours} {...TEMP_animationOptions}>
          {tours.tours.map((tour, index) => (
            <TourDetailCard key={`tour-card-${index}`} tour={tour} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dashboard;
