const path = require('path')
module.exports = {
    module: {
        rules: [
            {
                test: /\.s?css$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../'),
                // options: {
                //     data: `@import '@/src/scss/_variables.scss';`
                // }
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.dirname(path.resolve(__dirname))
        }
    }
}