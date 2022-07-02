import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import child_process from 'child_process';

const { watch } = gulp;

export function buildServer(cb) {
  child_process.exec(
    'tsc --project src/server/tsconfig.json',
    function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
}

export function watchServer() {
  watch(['src/server/**/*.ts'], buildServer);
}

export function restartOnChangeServer() {
  nodemon({
    watch: ['src/server/dist'],
    script: 'src/server/dist/index.js'
  });
}

export function devServer() {
  watchServer(),
    restartOnChangeServer();
}
