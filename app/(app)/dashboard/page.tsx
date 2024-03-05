"use client";

import { fetchToursByFlightNumber } from "../../../services/pickupApi";
import { useState } from "react";
import { Card, Flex, Heading } from "@radix-ui/themes";

import styles from "./Dashboard.module.css";
import Link from "next/link";

const Dashboard = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [tourData, setTourData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTourData(null); // Reset flight data on new submission
    setErrorMessage(""); // Reset previous errors

    try {
      const data = await fetchToursByFlightNumber(flightNumber);

      console.log(data);
      setTourData(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <>
      <Card className={styles.card} variant="surface">
        <Link href="/other">Link to other</Link>
        <Flex direction="column" gap="4" align="center">
          <img src="/favicon.png" width={72} alt="ASP App Icon" />
          <Heading size="8" weight="medium">
            TEST Data!
          </Heading>
        </Flex>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            placeholder="Enter flight number"
            required
          />
          <button type="submit">Fetch Data</button>
        </form>

        {/* Conditionally rendering the flight data or an error message */}
        {tourData && (
          <div>
            <h3>Requested Flight Number: {tourData.flightNumber}</h3>
            <div>
              {tourData.tours.map((tour, index) => (
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
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </Card>
    </>
  );
};

export default Dashboard;
