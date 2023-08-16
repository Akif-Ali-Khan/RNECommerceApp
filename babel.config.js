module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/assets': './src/assets',
          '~/components': './src/components',
          '~/screens': './src/screens',
          '~/styles': './src/styles',
          '~/navigation': './src/navigation',
          '~/services': './src/services',
        },
      },
    ],
  ],
};
