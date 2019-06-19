const fs = require('fs');

module.exports = {
    updateBrowsersList: function() {
        let bl = this.readBrowsersList().replace("not IE", "IE");
        this.updateBrowsersListFile(bl);
    },
    readBrowsersList: function() {
        return fs.readFileSync('browserslist','utf-8');

    },
    updateBrowsersListFile: function(value) {
        fs.writeFileSync('browserslist',
            value,
            'utf-8',
            (error) =>{
                console.log(`There was an error updating browserslist file: ${error}`);
            });
    }
}
