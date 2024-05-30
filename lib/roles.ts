import { User } from "@/types";

export const isPilotOrSimilar = (user: User) => {
  return user?.roles.some((role) => role.slug === "customer");
};
