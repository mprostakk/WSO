import Joi from "joi";
import { createValidator } from "../../../common";

const getTasks = createValidator({
  params: {},
  body: {},
  query: {},
});

export default {
  getTasks,
};
