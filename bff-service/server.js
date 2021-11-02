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

app.post('/product', (request, response) =>{

  	  axios.post(PRODUCT + '/products', request.body)
    	.then(function (data) {
  	  		response.status(200).send(data.data);
    	})
    	.catch(function (error) {
      		response.status(status(502)).send(error)
  		});

});


app.get('/product', function(req, res){

	if (!req.query.id) {
	  
	  axios.get(PRODUCT + '/products')
		.then(function (data) {
			res.status(200).send(data.data)
		})
		.catch(function (error) {
			res.status(status(502)).send({ Error: 'Cannot process request: GET All Products'})
		});

	} else {
	  let id = req.query.id; 
	  let url = PRODUCT + '/products/' + id;
	  axios.get(url).then(function(data) {
			res.status(200).send(data.data)
		}).catch(function(error) {
			res.status(status(502)).send({ Error: `Cannot process request: GET Product by ID \n ${error}`})
		});
	};

});

app.listen (PORT, ()=>{
	console.log(`Server is running on port ${PORT}.\n recipientURL for CART service: ${CART} \n recipientURL for PRODUCT service: ${PRODUCT}`)
});