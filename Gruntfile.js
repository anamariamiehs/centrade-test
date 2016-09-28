module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          "css/style.css": "less/styles.less" // destination : source
        }
      }
    },
    watch: {
      less: {
        files: ["public/css/*.less", "public/css/less/*.less"],
        tasks: ["less", "csslint"], 
        options: {
            nospawn: true
        }
      },
      jshint: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'less', 'watch']);

};