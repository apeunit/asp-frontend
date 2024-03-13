import classNames from "classnames";
import styles from "./TourCard.module.css";
import { Heading, Text } from "@radix-ui/themes";
import { Tour } from "@/types";
import { formatTourAddress, getStatusNiceName } from "@/lib/format";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import StatusIndicator from "../StatusIndicator/StatusIndicator";
import { getStatusColor } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";

type TourCard = {
  tour: Tour;
  className?: string;
  initiallyExpanded?: boolean;
};

const TourCard = (props: TourCard) => {
  const { tour, initiallyExpanded = false, className, ...rest } = props;
  const tourStartDateTime = new Date(tour.abfahrtzeit);
  const statusColor = getStatusColor(tour.status);

  const [expanded, setExpanded] = useState(initiallyExpanded);
  const [height, setHeight] = useState();

  const zIndex = useMotionValue(expanded ? 2 : 0);

  const cardRef = useRef<HTMLDivElement>(null);

  // TODO: recalculate card height upon resize
  useEffect(() => {
    if (cardRef.current) {
      setHeight(cardRef.current.offsetHeight as any);
    }
  }, []);

  const checkZIndex = () => {
    if (expanded) {
      zIndex.set(2);
    } else {
      setTimeout(() => {
        zIndex.set(0);
        // TODO: use correct duration or get specific point in animation through onUpdate
      }, 200);
    }
  };

  const handleCardClick = (event) => {
    // prevent closing of card when it's the only one in the list
    if (!initiallyExpanded) {
      setExpanded(!expanded);
    }
  };

  return (
    <Link
      href={`/tours/ASP/${tour.id}`}
      className={styles.card}
      style={{ height: height ? `${height}px` : undefined }}
    >
      <motion.div
        className={styles.cardContainer}
        data-open={expanded ? "" : undefined}
        ref={cardRef}
        style={{ zIndex }}
        onUpdate={(ter) => console.log("check index", ter)}
      >
        <motion.div
          layout
          className={classNames(styles.cardContent, styles[statusColor])}
          {...rest}
          // onClick={handleCardClick}
          onAnimationStart={() => console.log("start")}
          // onLayoutAnimationStart={() => console.log("layout start")}
          onLayoutAnimationStart={checkZIndex}
        >
          <motion.div layout>
            <Heading size={expanded ? "7" : "5"} weight={"medium"}>
              {tour.zielstrasse}
            </Heading>
          </motion.div>
          {tourStartDateTime && (
            <motion.div layout className={styles.time}>
              <Text size={"4"} weight={"medium"}>
                <span>
                  {tourStartDateTime.toLocaleTimeString("de-DE", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                {parseInt(tour.verspaetung) > 0 && (
                  <span className={styles.delay}>
                    +{Math.floor(parseInt(tour.verspaetung) / 60)} min
                  </span>
                )}
              </Text>
            </motion.div>
          )}

          <motion.div layout className={styles.previewStatusText}>
            <Text size={"2"} weight={"medium"}>
              {getStatusNiceName(tour.status)}
            </Text>
          </motion.div>

          <motion.div layout className={styles.route}>
            <motion.div layout className={styles.fromTo}>
              <div className={styles.from}>
                <Text className={styles.label}>From</Text>
                <Text size={"2"}>{formatTourAddress(tour, "start")}</Text>
              </div>
              <div className={styles.to}>
                <Text className={styles.label}>To</Text>
                <Text size={"2"}>{formatTourAddress(tour, "end")}</Text>
              </div>
            </motion.div>
            <div className={styles.status}>
              <StatusIndicator status={tour.status} />
              <Text size={"2"} weight={"medium"} className={styles.statusText}>
                {getStatusNiceName(tour.status)}
              </Text>
            </div>
          </motion.div>

          <StatusIndicator
            status={tour.status}
            className={styles.statusIndicator}
          />

          <VehicleDetails
            kfzfarbe={tour.kfzfarbe}
            kfzkennzeichen={tour.kfzkennzeichen}
            kfznummer={tour.kfznummer}
            kfztyp={tour.kfztyp}
            pax={tour.pax}
            className={styles.vehicleDetails}
          />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default TourCard;
