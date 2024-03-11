import { kfzfarbe, kfzkennzeichen, kfznummer, kfztyp } from "@/types";

import styles from "./VehicleDetails.module.css";
import { Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { getVehicleTypeNiceName } from "@/lib/format";
import classNames from "classnames";
import { motion } from "framer-motion";

type VehicleDetails = {
  kfzfarbe: kfzfarbe;
  kfzkennzeichen: kfzkennzeichen;
  kfznummer: kfznummer;
  kfztyp: kfztyp;
  pax: string;
  className?: string;
};

const VehicleDetails = (props: VehicleDetails) => {
  const { kfzfarbe, kfzkennzeichen, kfznummer, kfztyp, pax, className } = props;

  const vehicleImageMap = {
    Sprinterbus: "/images/sprinter.avif",
    Sprinter: "/images/sprinter.avif",
    T5: "/images/t5-placeholder.avif",
    T6: "/images/t5-placeholder.avif",
    Caddy: "/images/caddy.avif",
    Vito: "/images/vito.avif",
  };

  return (
    <motion.div layout className={classNames(styles.container, className)}>
      <Heading size={"6"} weight={"medium"} className={styles.licensePlate}>
        {kfzkennzeichen}
      </Heading>
      {kfztyp && (
        <Text size={"3"} className={styles.type}>
          {getVehicleTypeNiceName(kfztyp)}
        </Text>
      )}

      <div className={styles.details}>
        {[
          {
            label: "Nummer",
            value: kfznummer,
          },
          {
            label: "Pax",
            value: pax,
          },
          {
            label: "Farbe",
            value: kfzfarbe,
          },
        ].map((item, index) => (
          <Text size={"2"} className={styles.detailItem} key={index}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.value}>{item.value || "N/A"}</span>
          </Text>
        ))}
      </div>

      {/* Image */}
      {vehicleImageMap[kfztyp] ? (
        <Image
          src={vehicleImageMap[kfztyp]}
          width={450}
          height={300}
          className={styles.image}
          alt={`${kfztyp} ${kfzfarbe}`}
        />
      ) : (
        <Image
          src="/images/car-placeholder.png"
          width={2000}
          height={966}
          className={classNames(styles.image, styles.placeholder)}
          alt=""
        />
      )}
    </motion.div>
  );
};

export default VehicleDetails;
