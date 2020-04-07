
exports.up = function(knex) {
    return knex.schema.createTable('movie', function (table) {
        table.string('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('genre').notNullable();
        table.string('date').notNullable();
        table.string('actors').notNullable();
        table.string('url');
        table.string('img');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('movie');
};
