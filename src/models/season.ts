import mongoose, { Schema } from 'mongoose';

const Season = new Schema({
  film_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Film'
  },
  title: String 
});

export default mongoose.model('Season', Season);