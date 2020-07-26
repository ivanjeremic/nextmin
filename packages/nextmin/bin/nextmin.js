#!/usr/bin/env node
const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const c = require('../constants/server.constants.json');

const log = console.log;

const app = new express();

if (!fs.existsSync('.data')) {
  fs.mkdir('.data');
  // writeFile function with filename, content and callback function
  fs.writeFile('.data/data.json', 'Learn Node FS module', (err) => {
    if (err) throw err;
    log(chalk.green('File is created successfully.'));
  });
}

//////////// NEW NEW NEW
// add middlewares
app.use('/', express.static(path.resolve(__dirname, '..', 'admin/build')));

// create something
/* router.post('api/create', async (ctx, next) => {
  try {
    writeFile('killmongo.json', JSON.stringify(data));
    await next();
  } catch (err) {
    ctx.body = { danke: 'dir' };
    ctx.status = err.status || 500;
  }
}); */

// start express server on port 5000
app.listen(c.PORT, () => {
  log(chalk.red(`Nextmin running on http://localhost:${c.PORT}`));
});
