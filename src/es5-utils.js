const fs = require('fs');

module.exports = {
    addEs5Tsconfig: function() {
        const es5Config = {
            "extends": "./tsconfig.app.json",
            "compilerOptions": {
                "target": "es5"
            }
        };

        fs.writeFileSync('./tsconfig.es5.json',
            JSON.stringify(es5Config,null, 2),
            (error) =>{
                console.log(`There was an error writing the tsconfig.es5.json file error: ${error}`);
            });
    }
}
