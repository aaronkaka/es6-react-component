const execSync = require('child_process').execSync;

module.exports = function exec(command, returnStdout) {
  if (returnStdout) {
    return execSync(command, { encoding: 'utf8' }).trim();
  } else {
    execSync(command, { stdio: [0, 1, 2] });
  }
};
