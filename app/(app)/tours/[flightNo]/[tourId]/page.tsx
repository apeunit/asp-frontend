"use client";

import Header from "@/components/shared/Header/Header";
import TourCard from "@/components/shared/TourCard/TourCard";
import ToursList from "@/components/shared/ToursList/ToursList";
import { TEMP_animationOptions } from "@/lib/utils";
import { fetchTour } from "@/services/pickupApi";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Page = (props) => {
  // console.log(props);
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

  return (
    <>
      {/* has one of multiple tours / list will handle single/multi display */}
      {tour && (
        <motion.div {...TEMP_animationOptions}>
          <TourCard tour={tour} initiallyExpanded={true} />
        </motion.div>
      )}
    </>
  );
};

export default Page;
