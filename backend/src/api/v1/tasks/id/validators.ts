import Joi from "joi";
import { createValidator } from "../../../../common";
import { Id } from "./index.types";

const all = createValidator<Id>({
  params: {
    taskId: Joi.string().min(24).max(24).required(),
  },
  body: {},
  query: {},
});

const get = createValidator<Id.Get>({
  params: {
    taskId: Joi.string().min(24).max(24).required(),
  },
  body: {},
  query: {},
});

export default {
  all,
  get,
};
