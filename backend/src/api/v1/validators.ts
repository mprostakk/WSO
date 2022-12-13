import { createValidator } from "../../common";
import { V1 } from "./index.types";

const all = createValidator<V1>({
  params: {},
  body: {},
  query: {},
});

export default {
  all,
};
