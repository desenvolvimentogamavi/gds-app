module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugin: [
    [
      'modele-resolver',
      {
        root: ['./src'],
        extends: ['.ts, .tsx. js, .json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@features': './src/features',
          '@navigation': './src/navigation',
          '@styles': './src/styles',
          '@templates': './src/templates',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
