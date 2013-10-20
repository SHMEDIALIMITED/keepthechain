var fs = require('fs');
module.exports = {

    development: {

        version : JSON.parse(fs.readFileSync('./package.json')).version,

        root: require('path').normalize(__dirname + '/..'),


        // Express app name
        app: {
            name: 'Total Environment'
        },


        // Just in case we need a database for development
        db: process.env.MONGOLAB_URI ||  'mongodb://localhost/total-env-dev',


        // Facebook App Client IDs
        facebook: {
            production : '556000644453192',
            development: '522147454524278'
        }
    }
}