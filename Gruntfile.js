// Quiero:
// 1. JSHint
// 2. Test
// 3. Concatenar y afear

// Dos formas de ejecutarlo
// 1. Una sóla vez
// 2. Watching changes

// npm install -g grunt-cli
// npm init para crear el package.json
// npm install grunt --save-dev
// npm install grunt-contrib-jshint --save-dev
// npm install grunt-contrib-jasmine --save-dev
// npm install grunt-contrib-watch --save-dev
// npm install grunt-contrib-uglify --save-dev

// Con los --save-dev, se guardan como dependencias de desarrollo
// por si no subes los módulos al repositorio. Con eso puedes luego
// hacer un npm update y cosas de esas

module.exports = function(grunt) {
  
  var srcFiles = 'src/**/*.js';
  var specFiles = 'spec/**/*.js';

  grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
    jshint: {
			build: {
				src: srcFiles,
			}
		},
    
		uglify: {
      build: {
        src: srcFiles,
        dest: 'build/all.min.js',
        options: {
          sourceMap: 'build/all.min.js.map'
        }
      }
    },
    
    jasmine: {
      build: {
        src: srcFiles,
        options: {
          specs: 'spec/*Spec.js'
        }
      }
    },
    
    watch: {
      build: {
        files: [srcFiles, specFiles],
        tasks: ['jshint', 'jasmine', 'uglify']
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
 
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['jshint', 'jasmine', 'uglify']);
};