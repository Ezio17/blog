const { exec } = require('child_process');
exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
    if (err) {
        throw new Error(JSON.stringify(err));
    }

    if (typeof stdout === 'string' && (stdout.trim() === 'master')) {
      throw new Error('Branch name can"t be master!')
    }
});