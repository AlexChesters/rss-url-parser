/*global module:false*/
module.exports = function (grunt) {
  grunt.initConfig({
    // jasmine_nodejs: {
      // options: { specNameSuffix: 'Spec.js' },
      // spec: { specs: 'test/spec/**/*.js' }
    // },
    standard: {
      app: {
        src: ['index.js', 'test/**/*.js']
      }
    }
    // bump: {
      // options: {
        // files: ['package.json'],
        // commitFiles: ['package.json'],
        // tagName: '%VERSION%',
        // tagMessage: 'Release v%VERSION%' + (grunt.option('m') ? ' - ' + grunt.option('m') : ''),
        // commitMessage: 'Release v%VERSION%' + (grunt.option('m') ? ' - ' + grunt.option('m') : ''),
        // pushTo: 'origin'
      // }
    // }
  })

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-standard')
  // grunt.loadNpmTasks('grunt-jasmine-nodejs')
  // grunt.loadNpmTasks('grunt-bump')

  grunt.registerTask('test', ['standard'])
  grunt.registerTask('default', ['test'])

  // grunt.registerTask('release:patch', ['test', 'bump:patch'])
  // grunt.registerTask('release:minor', ['test', 'bump:minor'])
  // Commenting out releasing a major version until we are ready for v1
  // grunt.registerTask('release:major', ['test', 'bump:major'])
}
