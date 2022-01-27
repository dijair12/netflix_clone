import connectMongo from "../service/database";
import User from "../models/user";
const usersJson = require("../data/user.json");

const addUser = () => {
  try {
    usersJson.forEach(async(user) => {
      console.log(`adding ${user.name}`)
      await new User(user).save();
    })
    console.log('Final do Script')
  }catch (err) {
    console.log(err.message)
  }
}

connectMongo();
addUser();