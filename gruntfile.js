module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ["js/*.js"]
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.sass'
        }
      }
    },

    watch: {
      scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
      }
    }
  });
    
  // Load the plugins tasks
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-sass");

  // Default task(s).
  grunt.registerTask("default", ["jshint", "sass"]);
};