exports.up = function(knex) {
  return knex.schema
    .createTable('role', function (table) {
      table.increments('id');
      table.string('user', 10);
      table.string('admin', 10);
      table.timestamps();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('role');
};
