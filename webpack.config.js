module.exports = {
  entry: './app/app.jsx', // entry point
  output: {
    path: __dirname, //current directory path
    filename: './public/bundle.js' //output file location
  },
  resolve: {
    root: __dirname, // sends us to the path of the directory folder we're in
    alias: { // pick names for our components and tell webpack where to find it
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx'
    },
    extensions: ['', '.js', '.jsx'] // the extensions we want to be able to process
  },
  module: {  // this is where we specify the dev dependencies such as the various loaders we need
    loaders: [ // loader is an array of objects
      {
        loader: 'babel-loader', // telling babel loader to take our files, parse them through react, get the output and run them through the es2015 preset
        query: { // tells babel what we want it to do
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/, // this tells webpack which files to get
        exclude: /(node_modules|bower_components)/ // ignore these folders to not let webpack parse through them
      }
    ]
  }
};