import { MySubClassedDexie } from '../../src/persistence'
import { Tables } from '../../src/types/tables'

let db: MySubClassedDexie | null

export type IndexedDBParameters = {
  idb?: Partial<Tables>
}

type Context = {
  parameters: IndexedDBParameters
}

export const initializeIndexedDB = () => {
  try {
    db = new MySubClassedDexie()

    window.addEventListener('beforeunload', e => {
      db!.delete()
    })
  } catch {
    console.error('Could not create database')
  }
}

export const indexedDBLoader = async ({ parameters }: Context) => {
  const { idb = {} }  = parameters

  if(!db) {
    return {}
  }

  await db.clear()

  for (const [tableName, values] of  Object.entries(idb)) {
    await db.table(tableName).bulkPut(values)
  }

  return {}
}