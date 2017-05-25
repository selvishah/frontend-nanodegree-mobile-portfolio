module.exports = function(grunt) {

    grunt.initConfig({
        imagemin: {
            one: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    // Set to true to enable the following options…
                    expand: true,
                    // cwd is 'current working directory'
                    cwd: 'img/',
                    src: ['*.{png,jpg}'],
                    // Could also match cwd line above. i.e. project-directory/img/
                    dest: 'img/compressed/',
                }]
            },
            two: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    // Set to true to enable the following options…
                    expand: true,
                    // cwd is 'current working directory'
                    cwd: 'views/images/',
                    src: ['*.{png,jpg}'],
                    // Could also match cwd. i.e. project-directory/img/
                    dest: 'views/images/compressed/',
                }]
            },
        },

        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        height: 220,
                        width: 170,
                        name: "170_220",
                        quality: 50,
                        suffix: "_1x"
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'views/images/compressed',
                    dest: 'views/images/compressed/compressed2',
                }]
            },
            devtwo: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 100,
                        name: "100",
                        quality: 50,
                        suffix: "_1x"
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img/compressed',
                    dest: 'img/compressed/compressed2',
                }]
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'index.html': 'full/index.html',     // 'destination': 'source'
                'project-2048.html': 'full/project-2048.html',     // 'destination': 'source'
                'project-mobile.html': 'full/project-mobile.html',     // 'destination': 'source'
                'project-webperf.html': 'full/project-webperf.html',     // 'destination': 'source'
              }
            },
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'full/css',
                    src: ['*.css'],
                    dest: 'css',
                }]
            }
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'full/js',
                    src: '*.js',
                    dest: 'js'
                }]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['imagemin','responsive_images','htmlmin','cssmin','uglify']);

};

