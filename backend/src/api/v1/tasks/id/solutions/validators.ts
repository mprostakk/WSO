import Joi from "joi";
import { createValidator } from "../../../../../common";
import { Solutions } from "./index.types";

const all = createValidator<Solutions>({
  params: {
    taskId: Joi.string().min(24).max(24).required(),
  },
  body: {},
  query: {},
});

const post = createValidator<Solutions.Post>({
  params: {
    taskId: Joi.string().min(24).max(24).required(),
  },
  body: {
    stdin: Joi.string().min(10).max(65536).required(),
  },
  query: {},
});

export default {
  all,
  post,
};
