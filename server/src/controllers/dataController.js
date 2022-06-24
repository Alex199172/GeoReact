const config = require('./../../knexfile');
const knex = require('knex')(config.development)


class dataController {
    async PlayersHistory(req, res) {

    }

    async PlayersItem(req, res) {

    }

    async PlayersOnline(req, res) {

    }

    async RatingSingle(req, res) {
      let logins = await knex.select('login')
        .from('users')
        res.json(logins)
    }


    async RatingMultiplayer(req, res) {

    }

  }

module.exports = new dataController()
