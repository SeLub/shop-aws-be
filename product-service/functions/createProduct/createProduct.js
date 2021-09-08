import { Client } from 'pg';

const handleResponse = (products = {}, status = 200) => ({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*',
  },
  statusCode: status,
  body: JSON.stringify(products),
});

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;

const credentials = {
  user: PG_USERNAME,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: PG_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 5000,
};

let data_export = {}, error_code = 200;

export const handler = async event => {

  console.log(event);

  const client = new Client(credentials);

  client.on('error', err => {
                            data_export = 'DB Client Error 500:' + err.stack;
                            error_code = 500;
                            console.error('DB Client Error 500:', err.stack);
                            })

  await client
          .connect()
          .then(() => console.log('Client connected'))
          .catch(err => {data_export = 'DB connection error:' + err.stack; error_code = 500})


  const { title, description, price, imageid, count } = JSON.parse(event.body)

  if (!title) {title=''; data_export = 'Error: Title is mandatory! Please provide Title of Product.'; error_code = 500}
  if (!description) {description = ''}
  if (!price) {price = 0}
  if (!imageid) {imageid = 'null'}
  if (!count) {count = 0}



  let insertQuery = 'WITH rows AS(\
                     INSERT INTO products (title, description, price, imageid)\
                     VALUES (title, description, price, image_id)\
                     RETURNING id)\
                     INSERT INTO stocks (product_id, count)\
                     VALUES ((SELECT id FROM rows), 12);'

 await client
          .query(insertQuery)
          .then(res => { data_export = res })
          .catch(err => { data_export = 'DB query error 500:' + err.stack; error_code = 500})   
  
  await client
          .end()
          .then(() => console.log('Client disconnected'))
          .catch(err => {data_export = 'DB disconnection error 500:' + err.stack; error_code = 500})

  return await handleResponse({data_export, error_code});
}