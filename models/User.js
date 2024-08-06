import mongoose from 'mongoose';
import weatherSchema from './Weather.js';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  location: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  },
  weatherData: [weatherSchema],
});

const User = mongoose.model('User', userSchema);

export default User;