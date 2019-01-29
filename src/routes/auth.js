const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const passport = require('passport')
const bcrypt = require('bcrypt')

const config = require('../config')
const { getUserByUserName, registerUser } = require('../services/users')

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Error loading user',
        user: user,
        info
      })
    }
    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err)
      }
      const token = jwt.sign(user, config.SECRET)
      return res.json({ user, token })
    })
  })(req, res)
})

router.post('/register', async (req, res, next) => {
  const { username, password } = req.body
  try {
    const userExists = await getUserByUserName(username)
    console.log(userExists)
    if (userExists.status === 204) {
      try {
        const salt = await bcrypt.genSaltSync(10)
        const hashedPass = await bcrypt.hash(password, salt)
        console.log({ username, password: hashedPass })
        await registerUser({ username, password: hashedPass })
        return res.status(201).send()
      } catch (e) {
        console.error(e)
        return res.status(400).send()
      }
    }
  } catch (e) {
    console.error(e)
    console.log(e)
    return res.status(500).send()
  }
})

module.exports = router
