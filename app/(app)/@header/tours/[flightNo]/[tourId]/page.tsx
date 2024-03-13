"use client";

import { fetchTour } from "@/services/pickupApi";
import { useEffect, useState } from "react";

import { Text } from "@radix-ui/themes";

import Image from "next/image";

// import styles from "../../../tours/[flightNo]/[tourId]/Tour.module.css";
import styles from "@/app/(app)/tours/[flightNo]/[tourId]/Tour.module.css";
import { Time } from "@/components/shared/Icons/Icons";
import { getStatusColor } from "@/lib/utils";
import classNames from "classnames";

const Header = (props) => {
  const { params } = props;
  const { flightNo, tourId } = params;
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTour(flightNo, tourId);
      setTour(data);
    };

    fetchData();
  }, []);

  if (!tour) return null;

  const tourStartDateTime = new Date(tour.abfahrtzeit);
  const statusColor = getStatusColor(tour.status);

  return (
    <div className={classNames(styles.header, styles[statusColor])}>
      <div className={styles.titleContainer}>
        <div className={styles.logo}>
          <Image src="/klmlogo.svg" width="31" height="19" alt="" />
        </div>
        <h1 className={styles.title}>
          {/* TODO: show flight number here */}
          {tour.startstrasse}
        </h1>
      </div>
      {tourStartDateTime && (
        <Text size="4" className={styles.dateAndTime}>
          <Time />
          <span>{tourStartDateTime.toLocaleString("de-DE")}</span>
        </Text>
      )}

      {tour.status && (
        <Text size="3" className={styles.status}>
          Status: {tour.status}
        </Text>
      )}
    </div>
  );
};

export default Header;
