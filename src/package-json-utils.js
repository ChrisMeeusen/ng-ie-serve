const fs = require('fs');
const pkgConfig = require('package.json');

module.exports = {
    addServeNpmScript: function(projectName) {
        const pkg = this.getPackageConfig();
        // add the start:ie npm script to target a language transpilation that IE can understand
        if(!projectName){
            pkg.scripts["start:ie"]="ng serve --configuration=es5";
        } else {
            pkg.scripts[`start:${projectName}:ie`]=`ng serve --configuration=es5 --project=${projectName}`;
        }


        fs.writeFileSync('package.json',
            JSON.stringify(pkg,null, 2),
            (error) =>{
                console.log(`There was an error the package.json file. Error: ${error}`);
            });
    },
    getPackageConfig: function() {
        let pkgConf = require('./package.json');
        /*let rawData = fs.readFileSync('package.json');
        let pkgConf = JSON.parse(rawData);*/
        return pkgConf;
    }
}
