import connectMongo from "../service/database";
import Film from "../models/film";
const filmsJson = require("../data/film.json");

const addFilm = () => {
  try {
    filmsJson.forEach(async(film) => {
      console.log(`adding ${film.title}`)
      await new Film(film).save();
    })
    console.log('Final do Script')
  }catch (err) {
    console.log(err.message)
  }
}

connectMongo();
addFilm();