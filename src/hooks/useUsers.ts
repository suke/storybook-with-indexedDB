import { useLiveQuery } from "dexie-react-hooks";
import { getUsers } from "../persistence/users";

export const useUsers = () => {
  return useLiveQuery(() => getUsers());
};
