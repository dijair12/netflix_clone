import mongoose, { Schema } from 'mongoose';

const Episode = new Schema({
  season_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Film'
  },
  title: String,
  description: String,
  number: Number,
  cape: String
});

export default mongoose.model('Episode', Episode);