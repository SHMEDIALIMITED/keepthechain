var fs = require('fs');
module.exports = {

    development: {

        version : JSON.parse(fs.readFileSync('./package.json')).version,

        root: require('path').normalize(__dirname + '/..'),

        // Express app name
        app: {
            name: 'Keep the Chain Development'
        },

        db: 'mongodb://localhost/keep-the-chain'
    },

    production: {

        version : JSON.parse(fs.readFileSync('./package.json')).version,

        root: require('path').normalize(__dirname + '/..'),

        // Express app name
        app: {
            name: 'Keep the Chain'
        },

        db: process.env.MONGOLAB_URI
    }
}