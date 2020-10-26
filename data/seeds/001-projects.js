
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {name: 'Lambda', description: "Education", completed: true, id: 1},
        {name: 'Applied', description: "Work", id: 2},
        {name: 'Drums', description: "Hobby", id: 3}
      ]);
    });
};
