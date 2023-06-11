const path=require('path');
const yaml=require('yamljs');
const json5=require('json5');
const WorkboxPligin=require('workbox-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    plugins:[
        new WorkboxPligin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.csv$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.yaml$/i,
                type:'json',
                parser:{
                    parse: yaml.parse
                },
            },
            {
                test: /\.json5$/i,
                type:'json',
                parser:{
                    parse: json5.parse
                },
            },
        ],
    },
};