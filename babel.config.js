module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '~src': './src',
          '~models': './src/models',
          '~components': './src/components',
          '~hooks': './src/hooks',
          '~assets': './src/assets',
          '~navigators': './src/navigators',
          '~redux': './src/redux',
          '~screens': './src/screens',
          '~themes/*': './src/themes',
          '~untils/*': './src/untils',
          '~apis/*': './src/apis',
          '~store/*': './src/store',
        },
      },
    ],
  ],
};
