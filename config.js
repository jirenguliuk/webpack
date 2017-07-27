
module.exports = {
  entry: './main.js',
  output: {
    path:"./public",
    filename: 'bundle.js'
  }
}

/*var path = require('path')

let base = {
	    index:'app/main.js',
};

module.exports = {
  entry:base,
  output: {
  	path: path.resolve(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
        {
        test: /\.jsx?$/,
        
        exclude: [
          'node_modules'
        ],
        use:[{
           loader: "babel-loader",
        }]
      },
    ]
  }
};*/