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
