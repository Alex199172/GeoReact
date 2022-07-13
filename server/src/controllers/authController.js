const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const config = require('./../../knexfile');
const knex = require('knex')(config.development)
const {secret} = require('./../../configJWT')

const generateAccessToken = (id, login) => {
  const payload = {
    id,
    login
  }
  return jwt.sign(payload, secret, {expiresIn: '24h'})
}

class authController {
    async registration(req, res) {

      try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({message: 'Registration error'})
      }
      console.log(req.body);
      const candidate = await knex.select('login').where('login','=', req.body.login).from('users')
      console.log(candidate);
        if(candidate.length > 0) {
          return res.status(400).json({message: 'User with this login already exists'})
        }
        const hashPassword = await bcrypt.hash(req.body.password, 5);
        await knex('users').insert({
          login: req.body.login,
          email: req.body.email,
          password: hashPassword,
          status_id: 1,
          role_id: 2,
        })
        return res.json({message: 'Registration completed successfully'})
      } catch(e) {
          console.log(e)
          res.status(400).json({message: 'Registration error'})
      }
    }

    async login(req, res) {

      try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({message: 'Authorization error'})
        }
          const {login, password, role_id} = req.body
          const row = await knex.select('*').where('login','=', req.body.login).from('users')

          if(row.length <= 0) {
          return res.status(400).json({message: `${login} dont found`})
          }
        const validPassword = await bcrypt.compare(password, row[0].password)

        if(!validPassword) {
            return res.status(400).json({message: 'Incorrect password'})
        }
        const token = generateAccessToken(row[0]._id, row[0].login)
        return res.json({token, 'id':row[0].id, 'login':row[0].login,'role_id':row[0].role_id})
          } catch(e) {
          console.log(e)
          res.status(400).json({message: 'Login error'})
          }
      }

  }

module.exports = new authController()
