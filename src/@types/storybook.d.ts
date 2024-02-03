import { Tables } from "../types/tables";

declare module "@storybook/types" {
  interface Parameters {
    idb?: Partial<Tables>;
  }
}
