import mongoose from "mongoose";
import SolutionSchema from "./schema";
import "./hooks";
import { Solution } from "./index.types";

const SolutionModel: Solution.Model = mongoose.model(
  "solutions",
  SolutionSchema
);

export default SolutionModel;
