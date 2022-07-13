const config = require('./../../knexfile');
const knex = require('knex')(config.development)


class dataController {
    async PlayersHistory(req, res) {
      let logins = await knex.select('login')
        .from('users')
        res.json(logins)
    }

    async PlayersItem(req, res) {
      let data = await knex.select('login', 'created_at')
        .from('users')
        res.json(data)
    }

    async PlayersOnline(req, res) {
      let logins = await knex.select('login')
        .from('users')
        res.json(logins)
    }

    async RatingSingle(req, res) {
      let data = await knex.select('singlegame.user_id', 'users.login as login')
        .from('singlegame').join('users', 'users.id', '=', 'singlegame.user_id')
        res.json(data)
    }

    async RatingSingleBD(req, res) {
      await knex('singlegame').insert({
        user_id: req.body.user_id,
        score: req.body.scoreCount,
        continents_id: req.body.map,
      })
    }


    async RatingMultiplayer(req, res) {
      let logins = await knex.select('login')
        .from('users')
        res.json(logins)
    }

  }

module.exports = new dataController()
