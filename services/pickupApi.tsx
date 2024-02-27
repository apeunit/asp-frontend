import axios from "../lib/axios";

const fetchToursByFlightNumber = async (flightNumber) => {
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

export { fetchToursByFlightNumber };
