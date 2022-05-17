import HtmlWebpackPlugin from "html-webpack-plugin"
export default {
    mode:'development',
    entry: './index.js',
    output: {
        clean:true,
        filename:'main.js',
        
    },

    module:{
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                   sources: false
                }
            }
        ]


    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'EducacionIt NodeJs MongoDB',
            template: './public/index.html'
        }),
        new HtmlWebpackPlugin({
            title:'Chat - Sala ',
            template: './public/chat.html'
        })
      
    ]

   
       

    
}