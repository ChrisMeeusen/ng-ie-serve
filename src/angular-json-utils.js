const fs = require('fs');


module.exports = {
    doesProjectExist: function(projectName) {
        const ng = this.getAngularConfig(projectName);
        return ng.projects[projectName] == true;
    },
    getAngularConfig: function(projectName) {
        
        let ngConf = require('./angular.json');
        /*let rawData = fs.readFileSync('angular.json');
        let ngConf = JSON.parse(rawData);
         */
        return ngConf;
    },
    updateAngularConfig: function(projectName) {

        // get the angular.json configuration object
        let ng = this.getAngularConfig(projectName);

        // find the project to update
        let prj = ng.projects[projectName];

        // update the build and serve configurations for the project
        prj.architect.build.configurations.es5 = { "tsConfig": "./tsconfig.es5.json"}
        prj.architect.serve.configurations.es5 = { "browserTarget": `${projectName}:build:es5` }

        //update the original project definition in the angular.json
        ng.projects[projectName] = prj;
        fs.writeFileSync('angular.json',
            JSON.stringify(ng,null, 2),
            (error) =>{
                console.log(`There was an error writing the angular.json file error: ${error}`);
            }
        );
    },
    getDefaultProject: function() {
        const ng = this.getAngularConfig();
        return ng.defaultProject;
    }
}
