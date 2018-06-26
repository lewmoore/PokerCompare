module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['ChromeHeadless'],
    reporters: ['spec'],

    files: ['test/*.js', 'src/*.js']

  });
};
