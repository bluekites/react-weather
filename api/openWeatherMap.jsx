var axios = require('axios');

const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5c796dcd3b42df35ad15428f2401f404&units=imperial&type=accurate';



module.exports = {
  getTemp: function(city) {
    // use template strings
    var encodedCity = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_URL}&q=${encodedCity}`;
    
    return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message); // if error then we will retrieve error message
    });
  }
};