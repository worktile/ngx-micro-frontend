const WebpackAssetsManifest = require('webpack-assets-manifest');
const PrefixWrap = require('@worktile/planet-postcss-prefixwrap');

module.exports = {
    optimization: {
        runtimeChunk: false
    },
    plugins: [new WebpackAssetsManifest()],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                PrefixWrap('.app2', {
                                    hasAttribute: 'planet-inline',
                                    prefixRootTags: true
                                })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
};
