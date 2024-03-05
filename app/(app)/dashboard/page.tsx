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

const Dashboard = () => {
  const { user } = useAuth({ middleware: "auth" });

  const [flightNumber, setFlightNumber] = useState("");
  const [tours, setTours] = useState(null);

  const handleSearchUpdate = async (query) => {
    setTours(null); // Reset flight data on new submission

    try {
      const data = await fetchToursByFlightNumber(query);

      console.log(data);
      setTours(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Navigation user={user} onSearchUpdate={handleSearchUpdate} />

      {!tours && <EmptyCard />}
      {tours &&
        tours.tours &&
        tours.tours.map((tour, index) => (
          <TourDetailCard key={index} tour={tour} />
        ))}

      {tours && (
        <div>
          <h3>Requested Flight Number: {tours.flightNumber}</h3>
          <div>
            {tours.tours.map((tour, index) => (
              <div key={index}>
                <h3>Tour {index + 1}</h3>
                {Object.entries(tour).map(([key, value]) => (
                  <p key={key}>
                    {key}: {String(value) || "N/A"}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
