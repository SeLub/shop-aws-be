import { Client } from 'pg';
//const { Client } = require("pg");

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


async function getProductById(productId) {
  const client = new Client(credentials);
  await client.connect();
  const data = await client.query(`SELECT products.*, stocks.count \
                                    FROM products LEFT JOIN stocks \
                                    ON products.id = stocks.product_id\
                                    WHERE products.id='${productId}'`);
  const rows = data.rows
  await client.end();

  return rows;
}

export const handler = async event => {
  const { productId } = event.pathParameters || {};
  return await handleResponse(await getProductById(productId));
}