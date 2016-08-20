// Server / Migrations / Tweets

exports.up = function(knex, Promise) {
    return knex.schema.createTable('tweets', function(table) {
        table.increments();
        table.integer('user_id').notNullable();
        table.string('tweet').notNullable();
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tweets');
};
