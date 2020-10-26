const { table } = require("../config");

exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name').notNull().unique();
        tbl.text('description');
        tbl.boolean('completed').defaultTo(0)
        
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('name').notNull().unique();
        tbl.text('description');
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description').notNull();
        tbl.text('notes');
        tbl.boolean('completed').defaultTo(0)
        tbl.integer('project_id').unsigned().notNull().references('id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE')
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .notNull()
            .references('id')
            .inTable('projects')
        tbl.integer('resource_id')
            .unsigned()
            .notNull()
            .references('id')
            .inTable('resources')
        tbl.primary(['project_id', 'resource_id']);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
