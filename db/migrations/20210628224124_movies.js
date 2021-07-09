
// exports.up = function (knex) {
//     return knex.schema.createTable("movies", (table) => {
//       table.increments("movie_id").primary();   // A unique ID for the movie.
//       table.string("title");  // The title of the movie.
//       table.integer("runtime_in_minutes");
//       table.string("rating");  // The rating given to the movie.
//       table.text("description");  // A shortened description of the movie.
//       table.string("image_url");  // A URL to the movie's poster.
//       table.timestamps(true, true);
//     });
//   };

//   exports.down = function (knex) {
//     return knex.schema.dropTable("movies");
//   };

  exports.up = function (knex) {
    return knex.schema.createTable("movies", (table) => {
      table.increments("movie_id");
      table.string("title");
      table.integer("runtime_in_minutes");
      table.enum("rating", ["G", "PG", "PG-13", "R", "NC-17", "NR"]);
      table.text("description");
      table.string("image_url");
      table.timestamps(true, true);
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTable("movies");
  };

