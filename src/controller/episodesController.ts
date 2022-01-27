import { Request, Response } from 'express';

import ISeason from '../interface/season.interface';

import Episode from '../models/episode';

const getEpisodeOfSeason = async (req:Request, res:Response,) => {
  try {
    const { season } = req.params;

    const getEpisodes: Array<ISeason> = await Episode.find({
      season_id: season
    }).exec();

    res.status(200).json({error: false, data: getEpisodes});

  }catch(err) {
    res.status(400).json({error: true, data: err.message})
  }
}

export default {getEpisodeOfSeason};