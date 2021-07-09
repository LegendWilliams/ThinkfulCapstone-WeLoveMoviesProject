
// exports.up = function (knex) {
//     return knex.schema.createTable("movies_theaters", (table) => {
//       table.foreign("movie_id");   // A reference ID to a particular movie.
//       table.foreign("theater_id");  // A reference ID to a particular theater.
//       table.boolean("is_showing");  // A representation of whether or not the movie is currently showing in the referenced theater.
//       table.timestamps(true, true);
//     });
//   };

//   exports.down = function (knex) {
//     return knex.schema.dropTable("movies_theaters");
//   };


  exports.up = function (knex) {
    return knex.schema.createTable("movies_theaters", (table) => {
      table.boolean("is_showing").defaultTo(false);
      table.timestamps(true, true);
      table.integer("movie_id").unsigned().notNullable();
      table.foreign("movie_id").references("movie_id").inTable("movies");
      table.integer("theater_id").unsigned().notNullable();
      table.foreign("theater_id").references("theater_id").inTable("theaters");
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTable("movies_theaters");
  };

