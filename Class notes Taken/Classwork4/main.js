$.ajax({
	url: 'http://api.wunderground.com/api/b6d2c53116649658/conditions/q/CA/San_Francisco.json'
	dataType: 'jsonp',
	success: function(data){
		console.log('Success!');
		console.log(data);
		console.log(data.current_observation.temp_f);

		var conditionsImage = document.querySelector('.conditions-icon');
		conditionsImage.src = data.current_observation.icon_url;

		var conditionsTemp = document.querySelector('.conditions-temp');
		conditionsTemp.innerHTML = data.current_observation.temp_f;

		var conditionsWind = document.querySelector('.conditions-wind');
		conditionsWind.innerHTML = data.current_observation.wind_string;


	},
	

});

$.ajax({
	url: 'http://api.wunderground.com/api/b6d2c53116649658/forecast10day/q/NY/New_York.json'
	dataType: 'jsonp',
	success: function (data){
		console.log('Success!');
		console.log(data);

		var forecast = data.forecast.txt_forecast.forecastday;
		console.log(forecast);

		for(var i = 0; i < forecast.length; i++){
			console.log(forecast[i].fcttext);

			var forecastDay = document.createElement('div');

			var forecastIcon = document.createElement('img');
			forecastIcon.src = forecast[i].icon_url;

			var forecastTitle = document.createElement('h2');
			forecastTitle.innerHTML = forecast[i].title;

			var myParagraph = document.createElement('p');
			myParagraph.innerHTML = forecast[i].fcttext;

			forecastDay.appendChild(forecastIcon);
			forecastDay.appendChild(forecastTitle);
			forecastDay.appendChild(myParagraph);

			var forecastContainer = document.querySelector('.forecast');
			forecastContainer.appendChild(forecastDay);

		}
	},

	error: function(){
		console.log('Error!');
	}

});

$.ajax