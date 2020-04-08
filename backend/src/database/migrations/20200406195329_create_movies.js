
exports.up = function(knex) {
    return knex.schema.createTable('movie', function (table) {
        table.string('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('genre');
        table.string('date');
        table.string('actors');
        table.string('url');
        table.string('img');
        table.string('idUser');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('movie');
};
