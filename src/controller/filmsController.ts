import { Request, Response } from 'express';
import * as _ from 'underscore';

import IFilm from '../interface/film.interface';
import ISeason from '../interface/season.interface';

import Film from '../models/film';
import Season from '../models/season';

const dataOfHome = async (req: Request, res: Response) => {
  try {
    const filmsData = await Film.find({}).exec();
    let filmFinal:Array<any>;

    const getAllMovies = filmsData.map(async (movie: IFilm) => {
      const seasons: Array<ISeason> = await Season.find({
        film_id: movie._id
      })
      .exec();

      return {...movie._doc, seasons};
    })

    filmFinal = await Promise.all(getAllMovies);
    filmFinal = _.shuffle(filmFinal);

    const dataOfFavoriteAndSections = {
      data: {
        favorite: filmFinal[0], 
        sections: _.chunk(filmFinal, 2) 
      }
    }

    res.status(200).json({error:false, dataOfFavoriteAndSections})

  }catch (err) {
    res.status(400).json({error: true, data: err.message});
  }
}

const createFilm = async(req: Request, res: Response) => {
  try {
    const { body } = req;
    const filmSave: IFilm  = await new Film(body).save();
    res.status(201).json({error: false, data: filmSave});
  }catch (err) {
    res.status(400).json({error: true, data: err.message})
  }
}

const getAllFilms = async(req: Request, res: Response) => {
  try {
    const filmsAll: Array<IFilm> = await Film.find().exec();

    res.status(200).json({
      error: false,
      data: filmsAll
    })
  }catch (err) {
    res.status(400).json({
      error: true,
      data: err.message
    })
  }
}

const getOneFilmSearch = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const oneFilmSearch: IFilm = await Film.findOne({id}).exec();

    res.json({ error: true, data: oneFilmSearch})

  }catch (err) {
    res.json({ error: true, data: err.message })
  }
}

const updateFilm = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const updateFilmSearch: IFilm = await Film.findByIdAndUpdate(id, body).exec();

    res.status(200).json({
      error: false,
      data: updateFilmSearch
    });
  }catch (err) {
    res.status(400).json({ error: true, data: err.message })
  }
}

const deleteFilm = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteFilmSearch: IFilm = await Film.findByIdAndDelete(id).exec();

    res.status(200).json({
      error: false,
      data: deleteFilmSearch
    });
  }catch (err) {
    res.status(400).json({ error: true, data: err.message })
  }
}


export default {createFilm, getAllFilms, getOneFilmSearch, updateFilm, deleteFilm, dataOfHome};