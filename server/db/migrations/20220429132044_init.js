
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async(knex) => {
  await knex.schema.createTable('role', (table) => {
      table.increments('id');
      table.string('user', 10);
      table.string('admin', 10);
      table.timestamps();
  });
  await knex.schema.createTable('status', (table) => {
      table.increments('id');
      table.string('active', 10);
      table.string('blocked', 10);
      table.timestamps();
  });
  await knex.schema.createTable('users', (table) => {
    table
      .increments('id')
      .primary()
      .comment('Идентификатор');
    table
      .string('login', 256)
      .notNullable()
      .unique()
      .comment('Логин');
    table
      .string('email', 256)
      .notNullable()
      .unique()
      .comment('Почта');
    table
      .string('password', 256)
      .notNullable()
      .comment('Пароль');
    table
      .integer('status_id', 64)
      .notNullable()
//      .defaultTo('active')
      .comment('Статус')
      .references('id')
      .inTable('status');
   table
      .integer('role_id', 64)
      .notNullable()
//      .defaultTo('user')
      .comment('Статус')
      .references('id')
      .inTable('role');
    table
      .timestamp('created_at', {useTz: false})
      .notNullable()
      .defaultTo(knex.fn.now())
      .comment('Дата создания');
    table
      .timestamp('updated_at', {useTz: false})
      .nullable()
      .comment('Дата обновления');
    table.comment('Пользователи');
  });
  await knex.schema.createTable('continents', (table) => {
    table
      .increments('id')
      .primary()
      .comment('Идентификатор');
    table
       .string('world', 250);
    table
        .string('asia', 250);
    table
        .string('africa', 250);
    table
        .string('latinAmerica', 250);
    table
        .timestamps();
  });
  await knex.schema.createTable('players', (table) => {
    table
      .increments('id')
      .primary()
      .comment('Идентификатор');
    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .comment('Идентификатор пользователя');
    table
       .integer('geme_id')
       .notNullable()
       .references('id')
       .inTable('games')
       .comment('Идентификатор игры');
  });
await knex.schema.createTable('singleGame', (table) => {
    table
      .increments('id')
      .primary()
      .comment('Идентификатор');
    table
      .integer('player_id')
      .notNullable()
      .references('id')
      .inTable('players')
      .comment('Идентификатор пользователя');
    table
      .timestamp('created_at', {useTz: false})
      .notNullable()
      .defaultTo(knex.fn.now())
      .comment('Дата создания');
    table
      .integer('score', 10)
      .notNullable()
      .comment('Очки пользователя');
    table
      .integer('continents_id')
      .notNullable()
      .references('id')
      .inTable('continents');
  });
  await knex.schema.createTable('multiplaerGame', (table) => {
    table
      .increments('id')
      .primary()
      .comment('Идентификатор');
    table
      .integer('player1_id')
      .notNullable()
      .references('id')
      .inTable('players')
      .comment('Идентификатор пользователя');
    table
      .integer('player2_id')
      .notNullable()
      .references('id')
      .inTable('players')
      .comment('Идентификатор пользователя');
    table
      .timestamp('created_at', {useTz: false})
      .notNullable()
      .defaultTo(knex.fn.now())
      .comment('Дата создания');
    table
      .integer('score', 10)
      .notNullable()
      .comment('Очки пользователя');
    table
      .integer('winn', 10)
      .notNullable()
      .comment('Победитель');
    table
      .integer('lose', 10)
      .notNullable()
      .comment('Пороигравший');
    table
      .integer('continents_id')
      .notNullable()
      .references('id')
      .inTable('continents');
  });
  await knex.schema.createTable('games', (table) => {
    table
      .increments('id')
      .primary()
      .comment('Идентификатор');
    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .comment('Идентификатор пользователя');
    table
      .integer('multiplaerGame_id')
      .notNullable()
      .references('id')
      .inTable('multiplaerGame')
      .comment('Идентификатор игры');
    table
      .integer('singleGame_id')
      .notNullable()
      .references('id')
      .inTable('singelGame')
      .comment('Идентификатор игры');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async(knex) => {
  await knex.schema.dropTable('role');
  await knex.schema.dropTable('status');
  await knex.schema.dropTable('users');
  await knex.schema.dropTable('continents');
  await knex.schema.dropTable('players');
  await knex.schema.dropTable('singleGame');
  await knex.schema.dropTable('multiplaerGame');
  await knex.schema.dropTable('games');
};
