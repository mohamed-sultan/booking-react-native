module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

  // Transform JS/TS files in these node_modules packages as well:
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@testing-library)/)',
  ],

  moduleNameMapper: {
    '^@pages/(.*)$': '<rootDir>/src/atomic/pages/$1',
    '^@atoms/(.*)$': '<rootDir>/src/atomic/atoms/$1',
    '^@molecules/(.*)$': '<rootDir>/src/atomic/molecules/$1',
    '^@organisms/(.*)$': '<rootDir>/src/atomic/organisms/$1',
    '^@hook/(.*)$': '<rootDir>/src/hooks/$1',
    '^@navigation/(.*)$': '<rootDir>/src/navigation/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@store/(.*)$': '<rootDir>/src/stores/$1',
  },
};
