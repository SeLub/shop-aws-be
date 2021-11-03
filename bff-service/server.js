if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const CART = process.env.CART;
const PRODUCT = process.env.PRODUCT;

const app = express();

let corsOptions = {
	origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.all('/*', (req, res) => {

console.log(req.body)

	const recipient = req.originalUrl.split('/')[1];
	let recipientURL = process.env[recipient.toUpperCase()];	

	if (recipientURL) {

		if (req.query.id) { recipientURL = recipientURL +'/'+req.query.id; }

		let axiosConfig = {
				method: req.method,
				url: recipientURL
				}; 

    	if (req.body && Object.keys(req.body).length > 0) {

			axiosConfig.data = req.body;
			
		} else if (req.body && Object.keys(req.body).length == 0){

			delete axiosConfig.data;

		};

		axios(axiosConfig)
			.then(function(response) {
				res.json(response.data);
			})
			.catch (error =>{
				if (error.response) {
					const { status,	data } = error.response;
					res.status(status).json(data);
				} else {
					res.status(500).json({error: error.message});			
				}
			});


	} else {
		res.status(502).json({error: 'Cannot process request'});
	};
})

app.listen (PORT, ()=>{
	console.log(`Server is running on port ${PORT}.`)
});