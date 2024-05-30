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
  phone: string;
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

export type Role = {
  created_at;
  description: string;
  id: number;
  name: string;
  pivot: any;
  slug: "company" | "customer" | "admin" | "event-agency";
  token_expires_at: string;
  updated_at: string;
};

export type User = {
  created_at: string;
  email: string;
  email_verified_at: string;
  id: number;
  last_login: string;
  name: string;
  passwordless_login_token: any;
  personal_number: string;
  phone_number: any;
  roles: Role[];
};
