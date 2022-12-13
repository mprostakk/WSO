import { createValidator } from "../../../common";
import { Tasks } from "./index.types";

const all = createValidator<Tasks>({
  params: {},
  body: {},
  query: {},
});

const get = createValidator<Tasks.Get>({
  params: {},
  body: {},
  query: {},
});

export default {
  all,
  get,
};
