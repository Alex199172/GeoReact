exports.up = function(knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id');
      table.string('login', 255).notNullable().unique();
      table.string('email', 255).notNullable().unique();
      table.string('password', 255).notNullable();
      table.string('role', 10).notNullable().defaultTo('active');
      table.string('status', 10).notNullable().defaultTo('user');
      table.timestamps();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users');
};
