const {
    startDevServer
} = require('@cypress/webpack-dev-server')
const webpackConfig = require('@vue/cli-service/webpack.config.js')
import './commands'

module.exports = (on, config) => {
        on('dev-server:start', options => {
            return startDevServer({
                options,
                webpackConfig
            })
        })
        return config