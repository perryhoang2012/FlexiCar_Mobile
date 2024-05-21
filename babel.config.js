module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '~src': './src',
          '~assets': './src/assets',
          '~apis/*': './src/apis',
          '~models': './src/models',
          '~components': './src/components',
          '~hooks': './src/hooks',
          '~navigators': './src/navigators',
          '~redux': './src/redux',
          '~screens': './src/screens',
          '~themes/*': './src/themes',
          '~untils/*': './src/untils',
          '~store/*': './src/store',
        },
      },
    ],
  ],
};
