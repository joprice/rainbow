const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig, } = require('react-native-reanimated/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
// eslint-disable-next-line import/no-extraneous-dependencies
// const blacklist = require('metro-config/src/defaults/blacklist');
//
// // Deny list is a function that takes an array of regexes and combines
// // them with the default blacklist to return a single regex.
// const blacklistRE = blacklist([
//   // react-native-animated-charts
//   /src\/react-native-animated-charts\/Example\/.*/,
//   /src\/react-native-animated-charts\/node_modules\/.*/,
//   'src.react-native-animated-charts.package.json',
//   // react-native-reanimated <patch>
//   /patches\/reanimated\/.*/,
// ]);

// const defaultConfig = getDefaultConfig(__dirname);
//
// const transformer = {
//   getTransformOptions: async () => ({
//     transform: {
//       experimentalImportSupport: true,
//       inlineRequires: true,
//     },
//   }),
// };
//
// // Only run metro transforms on CI
// if (process.env.CI) {
//   transformer.babelTransformerPath = require.resolve('./metro.transform.js');
// }

// module.exports = {
//   resolver: {
//     //blacklistRE,
//   },
//   transformer,
// };
//
const config = {
   // transformer: {
   //    babelTransformerPath: require.resolve(
   //      "react-native-svg-transformer/react-native"
   //    )
   //  },
}
module.exports = wrapWithReanimatedMetroConfig(
  mergeConfig(defaultConfig, config)
);

