const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Hello RestApi from Express</h1>')
});

app.get('/about', (req, res) => {
	res.send('<h1>About Us Page</h1>')
});

app.get('/data', (req, res) => {
	const dataItems = [
		{
			id : 1,
			name : 'Por'
		},
		{
			id : 2,
			name : 'Parin'
		}
	];
	res.json(dataItems);
});

app.listen(3001, () => {
	console.log('Express server running running at port 3001');
})