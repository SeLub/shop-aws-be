import { Client } from 'pg';

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

let data_export = {};


async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}


export const handler = async event => {
  
  //console.log(event);

try {

  const client = new Client(credentials);
  
  client.on('error', err => {
                            data_export = 'DB Client Error:' + err.stack;
                            console.error(data_export);
                            })

  await client
          .connect()
          .then(() => console.log('Client connected'))
          .catch(err => { data_export = 'DB connection error:' + err.stack; console.error(data_export) })

  
  await asyncForEach(event.Records, async (record) => {

        let body = JSON.parse(record.body);

        //console.log(JSON.stringify(body))

        const { title, description, price, count, imageid } = body;

        console.log (title, description, price, count, imageid);

        if (typeof body.title === 'undefined' || body.title === '') { data_export = 'Not valid data for product creation'; return data_export;}

        await client.query('BEGIN');

        const queryProduct = 'INSERT INTO products(title, description, price, imageid) VALUES($1, $2, $3, $4) RETURNING id';
        const valuesProduct = [title, description, price, imageid];
        const queryStock = 'INSERT INTO stocks(product_id, count) VALUES($1, $2)';
        const {rows: products} = await client.query(queryProduct, valuesProduct)
                                             .then(() => console.log('Product data inserted to DB :', title, description, price, imageid))
                                             .catch( err => { data_export = 'Error insert Product data to DB:' + err.stack; console.log(data_export); });
        const productId = products[0].id;
        const countStock = [productId, count];
        await client.query(queryStock, countStock)
                    .then(() => console.log('Stock data inserted to DB'))
                    .catch(err => { data_export = 'Error insert Stock data to DB:' + err.stack; console.log(data_export); });
        console.log("Product created:" + productId);
        await client.query('COMMIT');
        data_export = {
                        title,
                        description,
                        price,
                        imageid,
                        count,
                        id: productId,
                      };
        console.log('Product Just created:', JSON.stringify(data_export));
        })

} catch (error) {

  console.log(error)


} finally {
        
        client.end();
        
        console.log('END of catalogBatchProcess: ', data_export)
} // try end


}; // handler end