import mongoose from 'mongoose';

const weatherSchema = new mongoose.Schema({
  temperature: { type: Number, required: true },
  feels_like: { type: Number, required: true },
  temp_min: { type: Number, required: true },
  temp_max: { type: Number, required: true },
  pressure: { type: Number, required: true },
  humidity: { type: Number, required: true },
  visibility: { type: Number, required: true },
  wind_speed: { type: Number, required: true },
  wind_deg: { type: Number, required: true },
  clouds: { type: Number, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default weatherSchema;
