
module.exports = {
  preset: 'react-native',
  setupFiles: ["<rootDir>/src/utils/setupTest.js"],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
