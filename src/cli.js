#!/usr/bin/env node
const fs = require('fs');
const ngUtils = require('./angular-json-utils');
const pkgUtils = require('./package-json-utils');
const blUtils = require('./browserslist-utils');
const es5Utils = require('./es5-utils');
const argUtils = require('./args-utils');


const args = argUtils.getArgs();

let projectName;
let defaultedProject = false;

if(!args.project){
// if no projectName is provided read the angular.json file and grab the default project
    projectName = ngUtils.getDefaultProject();
    console.log(`*** no project name provided using default project: ${projectName}`);
    defaultedProject = true;
} else {
    projectName = args.project;
    console.log(`*** updating project: ${projectName}`);
}

blUtils.updateBrowsersList();
console.log('*** updated browerslist file... ***');

es5Utils.addEs5Tsconfig();
console.log('*** added tsconfig.es5.json file... ***');

ngUtils.updateAngularConfig(projectName);
console.log('*** updated angular.json file... ***');

const prjName = defaultedProject ? null : projectName;
pkgUtils.addServeNpmScript(prjName);
console.log('*** updated package.json file... ***');

console.log('*** Success ***');
