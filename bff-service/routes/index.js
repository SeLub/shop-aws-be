const express = require('express');
const router = express.Router();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const NodeCache = require( "node-cache" );

const myCache = new NodeCache({ stdTTL: 60*2 });

const PORT = process.env.PORT || 3000;
const CART = process.env.CART;
const PRODUCT = process.env.PRODUCT;

/* GET home page. */
router.get('/*', function(req, res, next) {
  const recipient = req.originalUrl.split('/')[1];

  console.log(recipient);

  let recipientURL = process.env[recipient.toUpperCase()];

  console.log(recipientURL);

  if (req.query.id) { recipientURL = recipientURL +'/'+req.query.id; }

  if (recipient === 'product' && !req.query.id && req.method === 'GET') {
      
    value = myCache.get( 'getProductsList' );

      if ( value === undefined ){

        if (recipientURL) {

          makeAxios(req, res, recipientURL)
            
            .then(data => {

                  value = myCache.set( 'getProductsList', data );

                if (value) {console.log(`Cache has been set to: \n ${data}.`)}
                })

              .catch(err => console.log(err))

        } else {
          
          res.status(502).json({error: 'Cannot process request'});
        };

     
      } else {
        
        res.status(200).json(value);
      };

  } else {

      if (recipientURL) {

        makeAxios(req, res, recipientURL)

          .then(data => {

                console.log('Request received!', data );
            })

            .catch(err => console.log(err))

      } else {

        res.status(502).json({error: 'Cannot process request'});

      };
  
  //  res.render('index', { title: `Express ${recipientURL}` });
}});


const makeAxios = (req, res, recipientURL) => {
  
  let axiosConfig = { method: req.method, url: recipientURL };
  
  if (req.body && Object.keys(req.body).length > 0) { axiosConfig.data = req.body; } 
  else if (req.body && Object.keys(req.body).length == 0) { delete axiosConfig.data; };
  
  return axios(axiosConfig)
    .then((response) => {
      res.json(response.data);
      return response.data;
      })
    .catch (error => {
      if (error.response) {
        const { status, data } = error.response;
        res.status(status).json(data);
      } else { 
        res.status(500).json({error: error.message}); 
      };
    });
}

module.exports = router;
