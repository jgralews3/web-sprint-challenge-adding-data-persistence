
exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {notes: 'Query Language', description: "Learn SQLite3", completed: false, project_id: 1},
        {notes: 'On 10/25', description: "Pass Sprint", completed: false, project_id: 1},
        {notes: 'Probably spring', description: "Fix Hi-Hat", completed: false, project_id: 3}
      ]);
    });
};
