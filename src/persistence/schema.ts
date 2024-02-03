import { Tables } from "../types/tables";

export const schema = {
  users: "++id, name, age",
} as const satisfies Record<keyof Tables, string>;
