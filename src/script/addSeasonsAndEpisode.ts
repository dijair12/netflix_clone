import connectMongo from "../service/database";
import Film from "../models/film";
import Episode from "../models/episode";
import Season from "../models/season";

const addSeasonsAndEpisode = async() => {
  try {
    const series = await Film
      .find({type: 'series'})
      .select('_id')
      .exec();
    
     const numberOfSeasons = new Array(Math.floor(Math.random() * 5) + 1);
     const let4 = numberOfSeasons.map(data => console.log(data, 'testes'))
    
    console.log(series)
    /* series.forEach(async(serie) => {
      console.log(`Filme ${serie}----`)
      const numberOfSeasons = (Math.floor(Math.random() * 5) + 1);

      for (let i = 1; i <= numberOfSeasons; i++) {
        console.log(`Inserindo temporada ${i} de ${numberOfSeasons}`);
        const season = await new Season({
          film_id: serie,
          title: `Temporada ${i}`,
        }).save();

        const numberOfEpisodes = Math.floor(Math.random() * 5) + 1;
        for (let x = 1; x <= numberOfEpisodes; x++){
          console.log(`Inserindo episódios ${x} de ${numberOfEpisodes}`);
          await new Episode({
            season_id: season._id,
            title: `Episódio ${x}`,
            number: x,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            cape: 'https://i.picsum.photos/id/252/200/300.jpg?hmac=ztShXZawU4GkXMN_-8Bdh5utWr0FM5ekFynI1fJxvtc'
          }).save()
        }
      }

    }) */

    //console.log('FINALLL')
  }catch (err) {
    console.log(err.message)
  }
}

connectMongo();
addSeasonsAndEpisode();