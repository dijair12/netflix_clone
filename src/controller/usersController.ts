import { Request, Response } from 'express';

import IUser from '../interface/user.interface'
import User from '../models/user';

const getUser = async (req:Request, res:Response,) => {
  try {
    const { name, email, password } = req.body;
    const user: IUser = await User.findOne({
      name,
      email,
      password
    }).exec();

    if(!name || !email || !password) res.status(400).json({error:true, data: "Invalid data"})

    if(!user) throw new Error(`User ${name} not found`);

    res.status(200).json({error: false, data: user})
  }catch(err) {
    res.status(400).json({error: true, data: err.message})
  }
}

export default {getUser};