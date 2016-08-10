import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './configs/webpack.config.dev';

let app = express();

let compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './index.html'))
});

app.listen(3000, () => {
    console.log('Server Running on 3000');
});