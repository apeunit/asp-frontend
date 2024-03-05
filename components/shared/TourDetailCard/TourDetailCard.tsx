import classNames from "classnames";
import styles from "./TourDetailCard.module.css";
import { Heading, Text } from "@radix-ui/themes";
import { Tour } from "@/types";
import { formatTourAddress, getStatusNiceName } from "@/lib/format";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import StatusIndicator from "../StatusIndicator/StatusIndicator";
import { getStatusColor } from "@/lib/utils";

type TourDetailCard = {
  tour: Tour;
  className?: string;
};

const TourDetailCard = (props: TourDetailCard) => {
  const { tour, className, ...rest } = props;
  const tourStartDateTime = new Date(tour.abfahrtzeit);
  const statusColor = getStatusColor(tour.status);

  return (
    <div className={classNames(styles.card, styles[statusColor])} {...rest}>
      <Heading size={"6"} weight={"medium"}>
        {tour.zielstrasse}
      </Heading>

      {tourStartDateTime && (
        <Text size={"4"} weight={"medium"} className={styles.time}>
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
      )}

      <div className={styles.route}>
        <div className={styles.fromTo}>
          <div className={styles.from}>
            <Text size={"3"} className={styles.label}>
              From
            </Text>
            <Text size={"2"}>{formatTourAddress(tour, "start")}</Text>
          </div>
          <div className={styles.to}>
            <Text size={"3"} className={styles.label}>
              To
            </Text>
            <Text size={"2"}>{formatTourAddress(tour, "end")}</Text>
          </div>
        </div>
        <div className={styles.status}>
          <StatusIndicator status={tour.status} />
          <Text size={"2"} weight={"medium"} className={styles.statusText}>
            {getStatusNiceName(tour.status)}
          </Text>
        </div>
      </div>

      <VehicleDetails
        kfzfarbe={tour.kfzfarbe}
        kfzkennzeichen={tour.kfzkennzeichen}
        kfznummer={tour.kfznummer}
        kfztyp={tour.kfztyp}
        pax={tour.pax}
        className={styles.vehicleDetails}
      />
    </div>
  );
};

export default TourDetailCard;
