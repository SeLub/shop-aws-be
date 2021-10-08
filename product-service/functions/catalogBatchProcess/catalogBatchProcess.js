import { Client } from 'pg';
import AWS from 'aws-sdk';

export const handler = async event => {
  
// const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;
// 
// const credentials = {
//   user: PG_USERNAME,
//   host: PG_HOST,
//   database: PG_DATABASE,
//   password: PG_PASSWORD,
//   port: PG_PORT,
//   ssl: {
//     rejectUnauthorized: false,
//   },
//   connectionTimeoutMillis: 5000,
// };
// 
// let data_export = {};


async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}



//const client = new Client(credentials);
//  
//client.on('error', err => {
//                            data_export = 'DB Client Error:' + err.stack;
//                            console.error(data_export);
//                            })

//await client
//          .connect()
//          .then(() => console.log('Client connected'))
//          .catch(err => { data_export = 'DB connection error:' + err.stack; console.error(data_export) })

  
await asyncForEach(event.Records, async (record) => {


const messages = JSON.parse(record.body);

      console.log(messages);

      const typePrice = (messages.price > 500) ? 'HIGHT PRICE' : 'LOW PRICE';

      const {title, description, price, count} = messages;
   
      //const resultCreateProduct = await createNewProduct(title, description, price, count);

      // console.log(resultCreateProduct);

let params = {
        
        Subject: `Product ${messages.title} added to db. Send ${typePrice} notification`,

        Message: JSON.stringify(messages),
        
        TopicArn: 'arn:aws:sns:eu-central-1:914773708367:createProductTopic',
        
        MessageAttributes: {
        
          Price: {
        
            DataType: 'String',
        
            StringValue: typePrice
          },
        }
      };

// Create promise and SNS service object
let publishTextPromise = new AWS.SNS({region: 'eu-central-1'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise
  .then(
    function(data) {
      console.log(`Product ${messages.title} added to database. Notification ${typePrice} sent to the topic ${params.TopicArn}`);
      console.log("MessageID is " + data.MessageId);
    }).catch(
    
    function(err) {
    console.error(err, err.stack);
  });






//       let body = JSON.parse(record.body);

//       for (let prop in body) {
//          if (prop == "parsed") {
//            console.log(body['parsed'], 'Do something!!!!!!!!!!!!');
//          }
//       }

//     console.log(JSON.stringify(body))

//     const { title, description, price, count, imageid, parsed } = body;

//     console.log (title, description, price, count, imageid);

              
        })



//await client
//          .end()
//          .then(() => console.log('DB Client disconnected'))
//          .catch(err => {data_export = 'DB disconnection error 500:' + err.stack; console.error(data_export)})

}; // handler end