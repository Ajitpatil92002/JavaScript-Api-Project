const URL = 'https://newsdata.io/api/1/news?apikey=pub_8212e5910ab78d635646f20291a789e19497';

fetch(URL)
.then((res) => res.json())
.then((data) => console.log(data));