import axios from "../lib/axios";

const fetchToursByFlightNumber = async (flightNumber) => {
  try {
    const response = await axios.get("/api/v1/pickup", {});
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    throw error;
  }
};

export { fetchToursByFlightNumber };
