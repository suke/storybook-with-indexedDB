import { initializeDB, getDB } from "../../src/persistence/db";
import { Tables } from "../../src/types/tables";

export type IndexedDBParameters = {
  idb?: Partial<Tables>;
};

type Context = {
  parameters: IndexedDBParameters;
};

export const initializeIndexedDB = () => {
  try {
    initializeDB("db-for-storybook");
    const db = getDB();

    window.addEventListener("beforeunload", (e) => {
      db.delete();
    });
  } catch {
    console.error("Could not create database");
  }
};

let currentIdbSettings: Partial<Tables> = {};

export const indexedDBLoader = async ({ parameters }: Context) => {
  const { idb = {} } = parameters;
  const db = getDB();

  const previousIdbSettings = currentIdbSettings;
  currentIdbSettings = idb;

  if (currentIdbSettings === previousIdbSettings) {
    return {};
  }

  await Promise.all(db.tables.map((table) => table.clear()));
  await Promise.all(
    Object.entries(idb).map(([tableName, values]) =>
      db.table(tableName).bulkPut(values)
    )
  );

  return {};
};
