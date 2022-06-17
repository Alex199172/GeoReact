exports.up = function(knex) {
  return knex.schema
    .createTable('status', function (table) {
      table.increments('id');
      table.string('active', 10);
      table.string('blocked', 10);
      table.timestamps();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('status');
};
