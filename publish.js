const { exec } = require('child_process');

let version = require('./package.json').version.split('.');

version[2] = parseInt(version[2], 10) + 1;
version = version.join('.');

exec(`npm version ${version}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.log(`stderr: ${stderr}`);
  }

  if (stdout) {
    console.log(`stdout: ${stdout}`);
  }
});

exec('npm publish', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.log(`stderr: ${stderr}`);
  }

  if (stdout) {
    console.log(`stdout: ${stdout}`);

    exec('git push', (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }

      if (stderr) {
        console.log(`stderr: ${stderr}`);
      }

      if (stdout) {
        console.log(`stdout: ${stdout}`);
      }
    });
  }
});
