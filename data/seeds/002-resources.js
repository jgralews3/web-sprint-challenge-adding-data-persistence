
exports.seed = function(knex) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        {name: 'Computer', description: "With internet connection"},
        {name: 'Drum Set', description: "Modular"},
        {name: 'Notebook', description: "For notes"}
      ]);
    });
};
