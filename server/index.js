// Server

// Common
    import path from 'path';
    import configServer from './configs/server';

// Express
    import express from 'express';

    let app = express();

// Webpack
    import webpack from 'webpack';
    import webpackMiddleware from 'webpack-dev-middleware';
    import webpackHotMiddleware from 'webpack-hot-middleware';
    import webpackConfig from './configs/webpack.dev';

    let compiler = webpack(webpackConfig);
    app.use(webpackMiddleware(compiler, {
        hot: true,
        publicPath: webpackConfig.output.publicPath,
        noInfo: true
    }));
    app.use(webpackHotMiddleware(compiler));

// Body Parser
    import bodyParser from 'body-parser';
    app.use(bodyParser.json());

// Routes
    // Users
        import routesUsers from './routes/users';
        app.use('/api/users', routesUsers);

    // Auth
        import routesAuth from './routes/auth';
        app.use('/api/auth', routesAuth);

    // Tweets
        import routesTweets from './routes/tweets';
        app.use('/api/tweets', routesTweets);

app.get('/*', (request, response) => {
        response.sendFile(path.join(__dirname, './index.html'))
    });

// Start Server
    app.listen(configServer.port, () => {
        console.log('Server Running on '+configServer.port);
    });