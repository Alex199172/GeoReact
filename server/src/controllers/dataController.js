const config = require('./../../knexfile');
const knex = require('knex')(config.development)


class dataController {
    async PlayersHistory(req, res) {
      knex.select('title', 'author', 'year')
        .from('books')
    }

    async PlayersItem(req, res) {
      knex.select('title', 'author', 'year')
        .from('books')
    }

    async PlayersOnline(req, res) {
      knex.select('title', 'author', 'year')
        .from('books')
    }

    async Rating(req, res) {
      knex.select('title', 'author', 'year')
        .from('books')
    }

  }

module.exports = new dataController()
