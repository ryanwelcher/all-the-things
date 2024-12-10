const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		example: {},
	},
	variants: {
		dynamic: {
			render: 'file:./render.php',
		},
		static: {},
		plugin: {},
		interactive: {
			viewScriptModule: "file:./view.js",
			customScripts: {
			  build: "wp-scripts build --experimental-modules",
			  start: "wp-scripts start --experimental-modules",
			},
			supports: {
			  interactive: true,
			},
		}
	},
	pluginTemplatesPath: join( __dirname, 'templates/plugin' ),
	blockTemplatesPath: join( __dirname, 'templates/block' ),
};
