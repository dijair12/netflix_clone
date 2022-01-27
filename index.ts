import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import connectMongo from './src/service/database';

import routerFilm from './src/routes/films.routes';
import routerUser from './src/routes/users.routes';
import routerEpisode from './src/routes/episode.routes';

connectMongo();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

app.use('/', routerFilm);
app.use('/user', routerUser); 
app.use('/season', routerEpisode); 

app.listen(3000, () => {
  console.log("Server is running")
})

