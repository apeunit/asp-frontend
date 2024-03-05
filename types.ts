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
  status:
    | "geplant"
    | "fahrzeug kommt"
    | "kunde eingestiegen"
    | "fahre zum ziel"
    | "auftrag abgeschlossen"
    | "auftrag storniert";
  verspaetung: string;
  zielhausnummer: string;
  zielort: string;
  zielplz: string;
  zielstrasse: string;
};
