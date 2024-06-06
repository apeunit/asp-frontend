import classNames from "classnames"
import styles from "./TourCard.module.css"
import { Heading, Text } from "@radix-ui/themes"
import { Tour } from "@/types"
import { formatTourAddress, getStatusNiceName } from "@/lib/format"
import VehicleDetails from "../VehicleDetails/VehicleDetails"
import StatusIndicator from "../StatusIndicator/StatusIndicator"
import { TEMP_animationOptions, getGoogleMapsLatLngLink, getStatusColor } from "@/lib/utils"
import { useState } from "react"
import { motion, useMotionValue } from "framer-motion"
// import Link from "next/link";
import Button from "../Button/Button"
import { Phone } from "../Icons/Icons"
import { init } from "next/dist/compiled/webpack/webpack"
import { useAuth } from "@/hooks/auth"
import { isPilotOrSimilar } from "@/lib/roles"
import { Link } from "react-router-dom"

type TourCard = {
  tour: Tour
  flight: string
  className?: string
  initiallyExpanded?: boolean
}

const TourCard = (props: TourCard) => {
  const { user } = useAuth({ middleware: "auth" })
  const isPilot = isPilotOrSimilar(user)

  const { tour, flight, initiallyExpanded = false, className, ...rest } = props
  const tourStartDateTime = new Date(tour.abfahrtzeit)
  const statusColor = getStatusColor(tour.status)

  const [expanded, setExpanded] = useState(initiallyExpanded)
  // const [height, setHeight] = useState();

  const zIndex = useMotionValue(expanded ? 2 : 0)

  // const cardRef = useRef<HTMLDivElement>(null);

  // TODO: recalculate card height upon resize
  // useEffect(() => {
  //   if (cardRef.current) {
  //     setHeight(cardRef.current.offsetHeight as any);
  //   }
  // }, []);

  // const checkZIndex = () => {
  //   if (expanded) {
  //     zIndex.set(2);
  //   } else {
  //     setTimeout(() => {
  //       zIndex.set(0);
  //       // TODO: use correct duration or get specific point in animation through onUpdate
  //     }, 200);
  //   }
  // };

  // const handleCardClick = (event) => {
  //   // prevent closing of card when it's the only one in the list
  //   if (!initiallyExpanded) {
  //     setExpanded(!expanded);
  //   }
  // };

  const CardComponent = initiallyExpanded ? "div" : Link

  console.log(tour)

  return (
    <motion.div
      className={styles.cardContainer}
      data-open={expanded ? "" : undefined}
      // ref={cardRef}
      style={{ zIndex }}
      layout
      {...TEMP_animationOptions}
      // onUpdate={(ter) => console.log("check index", ter)}
    >
      <CardComponent
        to={`/tours/${tour.flightno}/${tour.id}`}
        className={styles.card}
        // style={{ height: height ? `${height}px` : undefined }}
      >
        <motion.div
          layout
          className={classNames(styles.cardContent, styles[statusColor])}
          {...rest}
          // onClick={handleCardClick}
          // onAnimationStart={() => console.log("start")}
          // onLayoutAnimationStart={() => console.log("layout start")}
          // onLayoutAnimationStart={checkZIndex}
        >
          <motion.div>
            <Heading size={expanded ? "7" : "5"} weight={"medium"}>
              {flight ? `To: ${tour.zielstrasse}` : `Flight Number: ${tour.flightno}`}
            </Heading>
          </motion.div>
          {tourStartDateTime && (
            <motion.div className={styles.time}>
              <Text size={"4"} weight={"medium"}>
                <span>
                  {tourStartDateTime.toLocaleTimeString("en-EN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                {parseInt(tour.verspaetung) > 0 && (
                  <span className={styles.delay}>+{Math.floor(parseInt(tour.verspaetung) / 60)} min</span>
                )}
              </Text>
            </motion.div>
          )}

          {expanded && (tour.note_departure !== "" || tour.note_arrival !== "") && (
            <motion.div className={styles.notes}>
              {tour.note_departure !== "" && (
                <Text as="div" size={"2"}>
                  {tour.note_departure}
                </Text>
              )}
              {tour.note_arrival !== "" && (
                <Text as="div" size={"2"}>
                  {tour.note_arrival}
                </Text>
              )}
            </motion.div>
          )}
          {expanded && tour.latitude !== "" && tour.longitude !== "" && (
            <div className={styles.gps}>
              <Button
                variant="primary"
                size="small"
                target="_blank"
                href={getGoogleMapsLatLngLink(tour.latitude, tour.longitude)}
              >
                Show Vehicle Location in Maps
              </Button>
            </div>
          )}

          {!expanded && (
            <motion.div className={styles.previewStatusText}>
              <Text size={"2"} weight={"medium"}>
                {getStatusNiceName(tour.status)}
              </Text>
            </motion.div>
          )}
          <motion.div className={styles.route}>
            <motion.div className={styles.fromTo}>
              <div className={styles.from}>
                <Text size={"2"} className={styles.label}>
                  From
                </Text>
                <Text>{formatTourAddress(tour, "start")}</Text>
              </div>
              <div className={styles.to}>
                <Text size={"2"} className={styles.label}>
                  To
                </Text>
                <Text>{formatTourAddress(tour, "end")}</Text>
              </div>
            </motion.div>
            <div className={styles.status}>
              <StatusIndicator status={tour.status} />
              <Text size={"2"} weight={"medium"} className={styles.statusText}>
                {getStatusNiceName(tour.status)}
              </Text>
            </div>
          </motion.div>
          <StatusIndicator status={tour.status} className={styles.statusIndicator} />
          <VehicleDetails
            kfzfarbe={tour.kfzfarbe}
            kfzkennzeichen={tour.kfzkennzeichen}
            kfznummer={tour.kfznummer}
            kfztyp={tour.kfztyp}
            pax={tour.pax}
            className={styles.vehicleDetails}
          />

          {!isPilot && tour.phone !== "" && (
            <div className={styles.cardFooter}>
              <Button variant="primary" icon={<Phone />} href="tel:+1234567890">
                Fahrer anrufen
              </Button>
            </div>
          )}
        </motion.div>
      </CardComponent>
    </motion.div>
  )
}

export default TourCard
