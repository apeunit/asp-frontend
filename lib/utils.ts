import { tourStatus } from "@/types";

export const createArrayOfNumbers = (length: number): number[] => {
  return Array.from({ length }, (_, i) => i);
};

export const getStatusColor = (status: tourStatus): string | null => {
  switch (status.toLowerCase()) {
    case "geplant":
      return "green";
    case "fahrzeug kommt":
      return "light-blue";
    case "kunde eingestiegen":
    case "fahre zum ziel":
      return "blue";
    case "auftrag abgeschlossen":
      return "gray";
    case "auftrag storniert":
      return "red";
    default:
      return null;
  }
};

export const getGoogleMapsLatLngLink = (
  latitude: string,
  longitude: string
) => {
  return `https://www.google.com/maps/@${latitude},${longitude},19z`;
};

export const TEMP_animationOptions = {
  initial: {
    opacity: 0,
    y: 7,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 7,
  },
  transition: {
    duration: 0.1,
    ease: "easeInOut",
  },
};
