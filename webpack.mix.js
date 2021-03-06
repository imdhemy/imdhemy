const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js').
    postCss('resources/css/app.css', 'public/css').
    disableNotifications().
    browserSync('127.0.0.1:8000').
    webpackConfig({
        resolve: {
            alias: {
                'react-native$': 'react-native-web',
            },
        },
    }).
    copyDirectory('resources/js/assets', 'public/assets')
