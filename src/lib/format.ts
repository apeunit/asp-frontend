import { Tour, tourStatus } from "@/types";

export const getStatusNiceName = (status: tourStatus) => {
  switch (status.toLowerCase()) {
    case "geplant":
      return "Fahrt bestätigt";
    case "fahrzeug kommt":
      return "Zur Abholung";
    case "kunde eingestiegen":
      return "Fahrt zum Ziel";
    case "fahre zum ziel":
      return "Fahrt zum Ziel";
    case "auftrag abgeschlossen":
      return "Abgeschlossen";
    case "auftrag storniert":
      return "Fahrt storniert";
    default:
      return status;
  }
};

export const getVehicleTypeNiceName = (type: string) => {
  switch (type) {
    case "T5":
      return "Volkswagen T5";
    case "T6":
      return "Volkswagen T6";
    default:
      return type;
  }
};

export const formatTourAddress = (tour: Tour, type: "start" | "end") => {
  // NOTE: sorry this is weird, but the backend is just trash
  const mappedType = type === "end" ? "ziel" : type;

  let address = tour[`${mappedType}strasse`];

  // if hausnummer is set, add it to the address
  if (tour[`${mappedType}hausnummer`]) {
    address += tour[`${mappedType}hausnummer`];
  }

  // if either plz or ort is set, add a comma
  if (
    tour[`${mappedType}plz`] &&
    tour[`${mappedType}plz`] !== "0" &&
    tour[`${mappedType}ort`]
  ) {
    address += ", ";
  }

  // if plz is set, add it to the address
  if (tour[`${mappedType}plz`] && tour[`${mappedType}plz`] !== "0") {
    address += tour[`${mappedType}plz`];
    address += " ";
  }

  // if ort is set, add it to the address
  if (tour[`${mappedType}ort`]) {
    address += tour[`${mappedType}ort`];
  }

  return address;
};
