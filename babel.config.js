module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-worklets/plugin', // ← 반드시 첫 번째
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: false, // 키가 없으면 빌드 에러 내기 원하면 true로
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        alias: {'@': './src'},
      },
    ],
  ],
};
