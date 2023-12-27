const fs = require('fs');

// Specify the directory path you want to list
const directoryPath = 'D:\Glitch clone\Downloads'

// Read the contents of the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter the files and directories from the list
  const directories = [];
  const filesList = [];

  files.forEach((file) => {
    const filePath = `${directoryPath}/${file}`;
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      directories.push(file);
    } else if (stats.isFile()) {
      filesList.push(file);
    }
  });

  console.log('Directories:', directories);
  console.log('Files:', filesList);
});
