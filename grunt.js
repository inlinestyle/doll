/*global module:false*/
module.exports = function(grunt) {
 var path = '/doll/resources/public/'

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    less: {
      dollMain: {
        src: path+'less/doll/*',
        dest: path+'css/compiled/main-less.css',
        options: {
          yuicompress: true
        }
      },
    },
    cssmin: {
        all: {
            src: [path+'css/third-party/space.css',
                  path+'css/third-party/bootstrap/bootstrap.css',
                  path+'css/third-party/bootstrap/bootstrap-responsive.css',
                  path+'css/compiled/main-less.css'
            ],
            dest: path+'css/compiled/main.css'
        }
    }
    /*
    watch: {
      files: '<config:less.all.dir>',
      tasks: 'default'
    },
    */
  });

  grunt.loadNpmTasks('grunt-clean');
  grunt.loadNpmTasks('grunt-less');
  grunt.loadNpmTasks('grunt-css');
  grunt.registerTask('default', 'less cssmin');

};
