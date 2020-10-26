const express = require('express');

const ProjectRouter = require('./data/projects/projectrouter');
const TaskRouter = require('./data/tasks/taskrouter');
const ResourceRouter = require('./data/resources/resourcerouter');

const server = express();

server.use(express.json());
server.use('/projects', ProjectRouter);
server.use('/tasks', TaskRouter);
server.use('/resources', ResourceRouter);

module.exports = server;