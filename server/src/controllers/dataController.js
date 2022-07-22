const config = require('./../../knexfile');
const knex = require('knex')(config.development)


class dataController {
    async PlayersHistory(req, res) {
      let logins = await knex.select('login')
        .from('users')
        res.json(logins)
    }

    async PlayersItem(req, res) {
      let data = await knex.select('login', 'created_at', 'updated_at')
        .from('users')
        res.json(data)
    }

    async PlayersItemBD(req, res) {
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
      let data = await knex.select('singlegame.user_id', 'users.login as login', 'singlegame.score')
        .from('singlegame').join('users', 'users.id', '=', 'singlegame.user_id')
        .distinct('singlegame.user_id')

        // data.forEach((item, i) => {
        //   data[i]['score'] = knex.select('*').from('singlegame').max('score').where('user_id', '=', item.user_id)
        // })
        console.log(data)
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
