module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$':'ts-jest'
    },
    testRegex: '(/___tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'js', 'jsx', 'json', 'node']
  }
