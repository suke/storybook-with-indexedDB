import Dexie, { Table } from "dexie";
import { User } from "../types/user";
import { schema } from "./schema";

export class MyDB extends Dexie {
  users!: Table<User>;

  constructor(dbName: string) {
    super(dbName);
    this.migrate();
  }

  async clear() {
    await this.users.clear();
  }

  private migrate() {
    this.version(1).stores(schema);
  }
}

export let db: MyDB;

export function initializeDB(dbName: string) {
  db = new MyDB(dbName);
}

export function getDB() {
  if (!db) {
    throw new Error("Database not initialized");
  }

  return db;
}
