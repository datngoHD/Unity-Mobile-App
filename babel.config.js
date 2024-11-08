module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@src': './src',
            '@features': './src/features',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@contexts': './src/contexts',
            '@components': './src/components',
            '@utils': './src/utils',
            '@services': './src/services',
          },
        },
      ],
    ],
  };
};
