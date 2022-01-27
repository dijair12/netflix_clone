import mongoose, {Schema} from 'mongoose';
import IFilm from '../interface/film.interface';

const Film = new Schema({
  title: String,
  type: String,
  cape: String,
  figure: String,
  thumb: String,
  description: String,
  gender: Array,
  cast: Array,
  scenes: Array,
})

export default mongoose.model<IFilm>('Film', Film);