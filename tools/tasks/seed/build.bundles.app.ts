import { join } from 'path';
import * as Builder from 'systemjs-builder';

import Config from '../../config';

const BUNDLER_OPTIONS = {
  format: 'register',
  minify: true,
  mangle: false
};

/**
 * Executes the build process, bundling the JavaScript files using the SystemJS builder.
 */
export = (done: any) => {
  let builder = new Builder({
    defaultJSExtensions: true,
    base: this.PROJECT_ROOT,
    packageConfigPaths: [
      join('node_modules', '*', 'package.json'),
      join('node_modules', '@angular', '*', 'package.json')
    ],
    paths: {
      // Note that for multiple apps this configuration need to be updated
      // You will have to include entries for each individual application in
      // `src/client`.
      [join('dist/tmp', 'app', '*')]: 'dist/tmp/app/*',
      'dist/tmp/node_modules/*': 'dist/tmp/node_modules/*',
      'node_modules/*': 'node_modules/*',
      '*': 'node_modules/*'
    },
    packages: {
      '@angular/common': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/compiler': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/core/testing': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/core': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/forms': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/http': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/platform-browser': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/platform-browser-dynamic': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/router': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      'rxjs': {
        main: 'Rx.js',
        defaultExtension: 'js'
      }
    }
  });
  // builder
  //   .buildStatic(join(Config.TMP_DIR, Config.BOOTSTRAP_PROD_MODULE),
  //     join(Config.JS_DEST, Config.JS_PROD_APP_BUNDLE),
  //     BUNDLER_OPTIONS)
  //   .then(() => done())
  //   .catch((err: any) => done(err));

  // Trying to split modules into multiple bundles
  let dir = 'dist/prod';

  builder
  .buildStatic(
    join('dist/tmp', 'app/main'),
    join(`${dir}/js`, 'app.js'),
    BUNDLER_OPTIONS)
    .then(() => builder.bundle(
      join('dist/tmp', 'app/about/about.module'),
      join(`${dir}/js`, 'about/about.js')))
    .then(() => builder.bundle(
      join('dist/tmp', 'app/home/home.module'),
      join(`${dir}/js`, 'home/home.js')))
  .then(() => done())
  .catch((err: any) => done(err));
};
