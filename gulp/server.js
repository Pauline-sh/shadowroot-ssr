const {dest, watch} = require('gulp');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');

const tsProject = ts.createProject('src/server/tsconfig.json');

function buildServer() {
  const tsResult = tsProject.src().pipe(tsProject());

  return tsResult.js.pipe(dest('src/server/dist'));
}

function watchServer() {
  watch(['src/server/**/*.ts'], buildServer);
}

function restartOnChangeServer() {
  nodemon({
    watch: ['src/server/dist'],
    script: 'src/server/dist/index.js'
  });
}

function devServer() {
  watchServer(),
  restartOnChangeServer();
}

function devServer() {
  watchServer(),
  restartOnChangeServer();
}

exports.buildServer = buildServer;
exports.watchServer = watchServer;
exports.devServer = devServer;