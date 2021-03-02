import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import CarSchema from "../models/Car"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema);
}

export const dbContext = new DbContext();
