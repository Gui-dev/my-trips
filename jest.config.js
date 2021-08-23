module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
