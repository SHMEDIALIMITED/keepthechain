module.exports = function(grunt) {



    grunt.initConfig({

        exec: {
          build: {
            command: 'node r.js -o r.config.js',
            stdout: false, 
            stderr: false
          },
          deploy : {
            command : 'git add package.json && git add src/package.json && git commit -m "Build:' + grunt.file.readJSON('package.json').version + '" && git push --force origin master',
            stdout: true, 
            stderr: true 
          }
        },

        cssmin: {
          css: {
            src: 'bin/public/css/screen_temp.css',
            dest: 'bin/public/css/screen.css'
          }
        },

        imageEmbed: {
          dist: {
            src: [ "src/public/css/screen.css" ],
            dest: "bin/public/css/screen_temp.css",
            deleteAfterEncoding : false
          }
        },

        jsdoc : {
          dist : {
              src: ['src/public/js/**'], 
              dest: 'docs'
          }
        },

        copy: {
          init: {
            files: {
              'bin/': 'src/**'
            }
          },

            css: {
                files: {
                    'bin/public/css/screen_temp.css': 'bin/public/css/screen.css'
                }
            },

          js : {
            files: {
              'bin/public/js/libs/require-min.js' : 'src/public/js/libs/require-min.js'
            }
          }


        },

        clean: {
          init: ['bin', 'docs'],
          js : 'bin/public/js',
          css : 'bin/public/css/main_temp.css',
          post : ['bin/public/css/screen_temp.css', 'bin/public/css/img', 'bin/.DS_Store', 'bin/public/test', 'bin/test', 'bin/public/css/main_temp.css', 'bin/public/config.rb', 'bin/public/sass', 'bin/public/views']
        }



    });

    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-jsdoc-plugin');
    grunt.loadNpmTasks('grunt-image-embed'); 
    grunt.loadNpmTasks('grunt');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-css');



    grunt.registerTask('bump', function(versionType) {
      versionType = grunt.option('type') || 'patch';
      var package = grunt.file.readJSON('package.json');
      package.version = grunt.helper('bump_version', package.version, versionType || 'patch');
      grunt.file.write('package.json', JSON.stringify(package, null, '  '));
      
      var packageDeploy = grunt.file.readJSON('src/package.json');
      packageDeploy.version = package.version;
      packageDeploy.name = package.name;
      packageDeploy.author = package.author;
      packageDeploy.description = package.description;
      packageDeploy.bugs = package.bugs;
      packageDeploy.scripts.start = "node server";
      grunt.file.write('src/package.json', JSON.stringify(packageDeploy, null, '  '));
      grunt.log.ok('Version bumped to ' + packageDeploy.version);
    })

    grunt.registerHelper('bump_version', function(version, versionType) {
      var type = {
        patch: 2,
        minor: 1,
        major: 0
      };

      var parts = version.split('.');
      var idx = type[versionType || 'patch'];

      parts[idx] = parseInt(parts[idx], 10) + 1;
      while(++idx < parts.length) {
        parts[idx] = 0;
      }
      return parts.join('.');
    });




    grunt.registerTask('commitBuild', function() {
        var request = require('request');
        var exec = require('child_process').exec;
        var done = this.async();

        var commit = 'Build ' + grunt.file.readJSON('package.json').version;
        var p = exec('git add --all && git commit -m "' + commit + '" && git push origin master', function() {
            done();
        });
    });

    grunt.registerTask('deployStage', function() {
        var request = require('request');
        var exec = require('child_process').exec;
        var done = this.async();

        var p = exec('git subtree push --prefix bin/ heroku master', function() {
            done();
        });
        p.stdout.pipe(process.stdout);
        p.stderr.pipe(process.stderr);
    });





    grunt.registerTask('default',  'bump clean:init copy:init copy:css cssmin clean:js copy:js exec:build clean:post commitBuild deployStage');



};