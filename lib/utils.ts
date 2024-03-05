import { tourStatus } from "@/types";

export const createArrayOfNumbers = (length: number): number[] => {
  return Array.from({ length }, (_, i) => i);
};

export const getStatusColor = (status: tourStatus): string | null => {
  switch (status.toLowerCase()) {
    case "geplant":
    case "fahrzeug kommt":
      return "grey";
    case "kunde eingestiegen":
    case "fahre zum ziel":
    case "auftrag abgeschlossen":
      return "blue";
    case "auftrag storniert":
      return "red";
    default:
      return null;
  }
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
