const { exec } = require('child_process');

exec('npx tailwindcss -i ./src/input.css -o ./public/output.css --minify', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing build: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});
