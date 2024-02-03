import { db } from "./db";

export const getUsers = () => db.users.toArray();
