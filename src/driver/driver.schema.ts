import mongoose from 'mongoose';

/**
 * Driver schema not fully refactor-ed
 */
export const DriverSchema = new mongoose.Schema({
  // custom-generated autoincrement key
  driverId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  // add more...
});
