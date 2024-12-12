const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const directoryPath = path.join(__dirname, '.');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        if (path.extname(file) === '.html') {
            const filePath = path.join(directoryPath, file);
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return console.log('Unable to read file: ' + err);
                }

                const lines = data.split('\n');
                lines.forEach((line, index) => {
                    if (line.includes('4.1')) {
                        console.log(chalk.yellow(file), 'Line:', index + 1);
                    }
                });
            });
        }
    });
});