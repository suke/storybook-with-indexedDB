import { getDB } from "./db";

export const getUsers = () => getDB().users.toArray();
