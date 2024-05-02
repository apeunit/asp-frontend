export type tourStatus =
  | "geplant"
  | "fahrzeug kommt"
  | "kunde eingestiegen"
  | "fahre zum ziel"
  | "auftrag abgeschlossen"
  | "auftrag storniert";
export type kfzfarbe = string;
export type kfzkennzeichen = string;
export type kfznummer = string;
export type kfztyp = string;
export type pax = string;

export type Tour = {
  id: string;
  flightno: string;
  note_departure: string;
  note_arrival: string;
  abfahrtzeit: string;
  kfzfarbe: kfzfarbe;
  kfzkennzeichen: kfzkennzeichen;
  kfznummer: kfznummer;
  kfztyp: kfztyp;
  pax: pax;
  starthausnummer: string;
  startort: string;
  startplz: string;
  startstrasse: string;
  status: tourStatus;
  verspaetung: string;
  zielhausnummer: string;
  zielort: string;
  zielplz: string;
  zielstrasse: string;
};

export type Company = {
  company_name: string;
  email_domain: string;
  id: number;
  short: string;
};

export type ToursPayload = {
  flightNumber: string;
  tours: Tour[];
  companies: Company[];
};
