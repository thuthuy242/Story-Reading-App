module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
		"react-native-reanimated/plugin",
		['module:react-native-dotenv',
		{
		  moduleName: '@env',
		  path: '.env',
		  blacklist: null,
		  whitelist: ['PORT', 'NODE_ENV', 'API_URL','API_URL_TEST','BASE_URL','BASE_URL_TEST','IMAGE_URL','IMAGE_URL_TEST'],
		  safe: false,
		  allowUndefined: true,
		}
	]
	  ],
  };
};
