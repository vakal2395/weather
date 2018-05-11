// var res = {};
// var xhr = new XMLHttpRequest();

// // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', false);

// // // 3. Отсылаем запрос
// xhr.send();


// if (xhr.status == 200) {
//  res = JSON.parse(xhr.response);
//   console.log( res );
//    console.log( res.body );
// } 



var Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var Month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

 var btn = document.getElementById('btn-search');

	btn.onclick = function(){
	
	
	var city = document.getElementById('select-city');
	  var reqGet =
    'https://api.openweathermap.org/data/2.5/find?q=' +
    city.value +
    '&units=metric&appid=1e4f9dda2459f098f6b0e6421a23ffdb';

  var reqOdj = request(reqGet);
  var temperature = reqOdj.list[0].main.temp;
  var cityRes = reqOdj.list[0].name;
  var iconCode = reqOdj.list[0].weather[0].icon;
  var descr = reqOdj.list[0].weather[0].description;
  display(temperature, iconCode, cityRes, descr);
  console.log(reqOdj);
};

function request(url) {
  var weather = new XMLHttpRequest();
  weather.open('GET', url, false);
  weather.send();
  return JSON.parse(weather.response);
}

function display(temperatur, img, city, description) {
  var today = new Date();

  	document.getElementById('day').innerHTML = (Days[today.getDay()]);
 	document.getElementById('date').innerHTML = (today.getDate() + ' ' + Month[today.getMonth()] + ' ' + today.getFullYear());
  	document.getElementById('temparature').innerHTML = (temperatur + '/C');
  	document.getElementById('weather').innerHTML = ('<img src =' + 'https://openweathermap.org/img/w/' + img + '.png' + '>');
  	document.getElementById('city-name').innerHTML = (city);
  	document.getElementById('description').innerHTML= (description);
}
