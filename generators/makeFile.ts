const fs = require('fs');
const path = require('path');

export default function makeFile(project, file) {
  const filePath = path.join(
    __dirname,
    `../nextjs_projects/${project}/pages/${file}`
  );

  fs.openSync(filePath, 'a'); // creates file if it doesn't exist
}
