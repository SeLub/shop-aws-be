import AWS from "aws-sdk-mock";
import { handler as importProductsFile} from './importProductsFile.js';

const handleResponse = (body = {}, stCode = 202) => {
    return {
        statusCode: stCode,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(body),
        isBase64Encoded: false
    }
}

describe('ImportProductsFile handler', () => {
    
    const mockUrl = 'https://rs.school/';
    
    beforeEach(() => {
        AWS.mock('S3', 'getSignedUrl', mockUrl);
    });

    it('should successfully get signed url', async () => {
        const result = await importProductsFile({queryStringParameters: {name: 'products.csv'}});
        expect(result).toBeDefined();
        expect(result.statusCode).toBe(202);
        //expect(result).toEqual(handleResponse(mockUrl));

    });

        it('should return Error 400', async () => {
        const result = await importProductsFile();
        expect(result).toBeDefined();
        expect(result.statusCode).toBe(400);
    });

});
