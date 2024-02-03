import Dexie, { Table } from "dexie";
import { User } from "../types/user";
import { schema } from "./schema";
import { DB_NAME } from "../constants/dbName";

export class MySubClassedDexie extends Dexie {
  users!: Table<User>;

  constructor() {
    super(DB_NAME);
    this.migrate();
  }

  async clear() {
    await this.users.clear();
  }

  private migrate() {
    this.version(1).stores(schema);
  }
}

export const db = new MySubClassedDexie();
