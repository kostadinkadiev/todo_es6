module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks


  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'es6/',
          src: ['*.js'],
          dest: 'build/'
        }]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'es6/**/*.js']
    },
    
    watch: {
      scripts: {
        files: ['es6/**/*.js'],
        tasks: ['babel', 'jshint'],
        options: {
          spawn: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch', 'grunt-contrib-jshint');

  grunt.registerTask("default", ["babel", "jshint"]);
};