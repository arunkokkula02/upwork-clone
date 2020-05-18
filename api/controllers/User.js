const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const { checkifUsernameorEmail } = require('../middleware/helper')
const User = require('../../models').User;
const Profile = require('../../models').Profile;
const Op = Sequelize.Op
// Create user
exports.createUser = (req, res) => {
  return User.create(req.body)
    .then((createdUser) => {
      return res.status(201).json(createdUser)

    })
    .catch((err) => {
      return res.status(400).json({ message: err.message })
    })
}

// Get a spefific user
exports.getUser = (req, res) => {
  return User.findByPk(req.params.id).then(user => {
    res.status(200).json(user)
  })
}

// update user
exports.updateUser = (req, res) => {
  return User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      return res.status(200).json({ message: "Record updated" })
    }).catch((err) => {
      return res.status(400).json({ message: err.message })
    })
}

exports.login = async (req, res) => {
  //1. check user email -exitst
  const { username, email, password } = req.body
  if ((!username || !email) && !password) {
    return res.status(400).status({ message: "fields are required" })
  }

  let userExist;
  if (username) {
    userExist = await User.findOne({ where: { username: username } })
  } else if (email) {
    userExist = await User.findOne({ where: { email: email } })
  }


  if (!userExist) {
    return res.status(401).json({ message: "Username/EMail does not exist" })
  }

  //2. password match
  const passwordMatch = await bcrypt.compare(password, userExist.dataValues.password)
  if (!passwordMatch) {
    return res.status(401).json({ message: "wrong password" })
  }
  //3. generate token
  const token = jwt.sign(
    { userId: userExist.dataValues },
    'RANDOM_TOKEN_SECRET',
    { expiresIn: '24h' });
  return res.status(200).json({
    userId: userExist.dataValues,
    token: token
  })
}




