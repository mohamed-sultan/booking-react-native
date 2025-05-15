module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@pages': './src/atomic/pages',
          '@atoms': './src/atomic/atoms',
          '@molecules': './src/atomic/molecules',
          '@organisms': './src/atomic/organisms',
          '@hook': './src/hooks',
          '@navigation': './src/navigation',
          '@constants': './src/constants',
          '@store': './src/stores',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
