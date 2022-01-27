import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

const User = new Schema({
  name: String,
  email: String,
  password: String,
  created: { type: String, default: moment(Date.now()).format() },
})

export default mongoose.model('User', User);