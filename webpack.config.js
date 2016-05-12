var webpack = require('webpack');

module.exports = {
  // entry will use script loaders to package the jquery and foundation js scripts
  entry: ['script!jquery/dist/jquery.min.js', 'script!foundation-sites/dist/foundation.min.js', './app/app.jsx'], // entry point
  output: {
    path: __dirname, //current directory path
    filename: './public/bundle.js' //output file location
  },
  externals: {  // key value pair where the key is the module name and the value is the variable name we want available in our external script files
    jquery: 'jQuery' 
  },
  plugins: [
    new webpack.ProvidePlugin({  // allows for webpack to detect the specific symbols and load up jquery module
      '$': 'jquery',
      'jQuery': 'jquery' 
    })
  ],
  resolve: {
    root: __dirname, // sends us to the path of the directory folder we're in
    alias: { // pick names for our components and tell webpack where to find it
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      About: 'app/components/About.jsx',
      Example: 'app/components/Example.jsx',
      openWeatherMap: 'api/openWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles: 'styles/app.css'
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
  },
  devtool: 'cheap-module-eval-source-map' // lets us create source maps that the browser automatically understand for debugging
};