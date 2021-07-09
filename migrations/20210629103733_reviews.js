
// exports.up = function (knex) {
//     return knex.schema.createTable("reviews", (table) => {
//       table.increments("review_id").primary();   // A unique ID for the review.
//       table.text("content");  // The content of the review, written in markdown.
//       table.integer("score");  // A numerical representation of the score given to the movie by the critic.
//       table.timestamps(true, true);
//       table.foreign("critic_id");  // A reference ID to a particular critic.
//       table.foreign("movie_id");  // A reference ID to a particular movie.
//     });
//   };

//   exports.down = function (knex) {
//     return knex.schema.dropTable("reviews");
//   };

  exports.up = function (knex) {
    return knex.schema.createTable("reviews", (table) => {
      table.increments("review_id").primary();
      table.text("content");
      table.integer("score");
      table.timestamps(true, true);
      table.integer("critic_id").unsigned().notNullable();
      table.foreign("critic_id").references("critic_id").inTable("critics");
      table.integer("movie_id").unsigned().notNullable();
      table.foreign("movie_id").references("movie_id").inTable("movies");
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTable("reviews");
  };