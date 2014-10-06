// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
            yeoman: {
                silverstripeRoot: '../../',
                silverstripeTheme: './'
            },
            watch: {
                compass: {
                    files: ['scss/{,*/}*.{scss,sass}'],
                    tasks: ['compass:server']
                },
                js: {
                    files: ['javascripts/{,*/}*.js'],
                    tasks: ['jshint:all']
                }
            },
            jshint: {
                options: {
                    jshintrc: '.jshintrc'
                },
                all: [
                    'Gruntfile.js',
                    'javascripts/{,*/}*.js',
                    '!javascripts/modernizr.js',
                ]
            },
            compass: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'css',
                    generatedImagesDir: 'images/generated',
                    imagesDir: 'images',
                    javascriptsDir: 'javascripts',
                    fontsDir: 'fonts',
                    importPath: 'bower_components',
                    httpImagesPath: 'images',
                    httpGeneratedImagesPath: 'images/generated',
                    httpFontsPath: 'fonts',
                    relativeAssets: false,
                    assetCacheBuster: false,
                    outputStyle: 'compressed'
                },
                server: {
                    options: {
                        debugInfo: true
                    }
                }
            },
    <% if (includeFtpush == true) { %>
            ftpush: {
                theme: {
                    auth: {
                        host: 'server.net',
                        authKey: 'key1'
                    },
                    simple: true,
                    src: '<%= yeoman.silverstripeTheme %>',
                    exclusions: ['.grunt/','.ftppass','.sass-cache', 'bower_components', 'scss', 'node_modules', '.bowerrc', '.jshintrc', 'package.json', 'bower.json', 'Gruntfile.js'],
                    dest: '<%%= themeDir %>',
                    keep: ['old']
                }
            },
    <% } %>
//            responsive_images: {
//                options: {
//                    sizes: [
//                        {
//                            name: "small",
//                            width: 300,
//                            height: 200,
//                            quality: 1
//                        },
//                        {
//                            name: "medium",
//                            width: 600,
//                            height: 400,
//                            quality: 1
//                        }
//                    ]
//                },
//                server: {
//                    files: [
//                        {
//                            expand: true,
//                            src: ['**.{jpg,gif,png}'],
//                            cwd: 'images/arbeiten/',
//                            custom_dest: '<%= yeoman.app %>/images/responsive/{%= name %}/'
//                        }
//                    ]
//                },
//                dist: {
//                    files: [
//                        {
//                            expand: true,
//                            src: ['**.{jpg,gif,png}'],
//                            cwd: '<%= yeoman.dist %>/images/arbeiten/',
//                            custom_dest: '<%= yeoman.dist %>/images/responsive/{%= name %}/'
//                        }
//                    ]
//                }
//            },
            <% if (includeModernizr == true) { %>
            modernizr: {
                devFile: 'bower_components/modernizr/modernizr.js',
                outputFile: 'javascripts/modernizr.js',
                files: [
                    'javascripts/{,*/}*.js',
                    'css/{,*/}*.css'
                ],
                uglify: true
            },
            <% } %>
            bower: {
                options: {
                    exclude: ['modernizr']
                }
            }
        }
    )
    ;

    grunt.registerTask('deploy', [
        'build'<% if (includeFtpush == true) { %>,
        'ftpush'<% } %>
    ]);

    grunt.registerTask('build', [
        'jshint',
        <% if (includeModernizr == true) { %>'modernizr',<% } %>
        'imagemin',
        'svgmin',
//        'responsive_images:dist',
    ]);

    grunt.registerTask('default', [
        'watch'
    ]);
}
;
