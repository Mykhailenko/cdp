//$(document).ready(function(){
//	var ctx = document.getElementById("canvas").getContext("2d");
//	var data = {
//		labels : ["January","February","March","April","May","June","July"],
//		datasets : [
//			
//			{
//				fillColor : "rgba(210,200,215,0.5)",
//				strokeColor : "rgba(220,220,220,1)",
//				data : [65,59,90,81,56,55,40]
//			},
//			{
//				fillColor : "rgba(220,220,220,0.5)",
//				strokeColor : "rgba(220,220,220,1)",
//				data : [65,59,90,81,56,55,40]
//			},
//			{
//				fillColor : "rgba(151,147,235,0.5)",
//				strokeColor : "rgba(151,177,235,1)",
//				data : [28,48,40,19,96,27,100]
//			},
//			{
//				fillColor : "rgba(151,187,205,0.5)",
//				strokeColor : "rgba(151,187,205,1)",
//				data : [28,48,40,19,96,27,100]
//			}
//		]
//	}
//	var option = {};
//	
//	var myPie = new Chart(ctx).Bar(data, option);
//	
//	epamData = getEpamData();
//	var labels = [];
//	for(var prop in epamData){
//		var year = getYeatNumberFromKey(prop);
//		labels.push(year);	
//	}
//});
function generateDateForMap(){
	var dataForYear = getEpamData()['Year2013'];
	var generatedData = {};
	for(city in dataForYear){
		var country = getCountryShortNameByCity(city);
		countEmpoloyees = dataForYear[city];
		if(generatedData[country] == undefined){
			generatedData[country] = average(countEmpoloyees);
		}else{
			generatedData[country] += average(countEmpoloyees); 
		}
	}
	return generatedData;
}
function average(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum / arr.length;
}

function getYeatNumberFromKey(key){
	return key.substr(4);
}
function getEpamData(){
	return data_statistic['EPAM'];
}
function getCountryShortNameByCity(searchedCity){
	var countries = {
			"US" : ["Atlanta", "Boston" , "Chicago", "Conshohocken","Houston", "Los_Angeles", "Minneapolis", "New_York", "Newtown" , "Orlando", "San_Diego", "San_Francisco_Bay_Area", "Seattle"],
			"BY" : ["Brest", "Gomel", "Minsk", "Mogilev","Grodno"],
			"DE" : ["Frankfurt", "Munich"],
			"HU" : ["Budapest", "Debrecen", "Szeged"],
			"UA" : ["Dnipropetrovsk", "Kharkiv", "Kyiv", "Lviv","Vinnytsya"],
			"SE" : ["Goteborg","Stockholm"],
			"GB" : ["London"],
			"KZ" : ["Astana", "Karaganda"],
			"RU" : ["Izhevsk", "Moscow", "Ryazan", "Saint_Petersburg", "Samara", "Saratov","Sergiev_Posad", "Togliatti","Tver","Vitebsk"],
			"PL" : ["Krakow", "Wroclaw"],
			"CAN" : ["Toronto"],
			"AM" : ["Yerevan"],
			"CH" : ["Zurich"]		};
	for(country in countries){
		cities = countries[country];
		for(var i = 0; i < cities.length; ++i){
			city = cities[i];
			if(city == searchedCity){
				return country;
			}
		}
	}
	console.log(searchedCity);
	return "IT";
}
