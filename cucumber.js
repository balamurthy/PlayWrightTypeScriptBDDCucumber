module.exports = {
  default: {
    paths: ['src/test/features/*.feature'],
    require: [
      'src/test/steps/*.ts',
      'src/test/support/*.ts'
    ],
    requireModule: ['ts-node/register'],  // transpile TS on the fly
    format: ['progress',
      'allure-cucumberjs/reporter'
    ],
    
    publishQuiet: false,
  default: {
    failFast: true
  },
  formatOptions: {
      resultsDir: "allure-results"
      
    }
  }
};
