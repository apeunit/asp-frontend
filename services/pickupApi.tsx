import axios from "../lib/axios";

export const fetchTours = async (flightNumber = "") => {
  try {
    const response = await axios.post("/api/v1/pickup", {
      flightNumber: flightNumber,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data:", error.message);
    throw error;
  }
};

export const fetchTour = async (flightNo, tourId) => {
  const tours = await fetchTours(flightNo);

  const tour = tours.tours.find((tour) => tour.id === tourId);

  return tour;
};

