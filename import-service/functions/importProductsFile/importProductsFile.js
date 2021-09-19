import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

let resault = undefined;

export const handler = async event => {

	console.log(event);
 	let fileName = event['queryStringParameters']['name'];

	const BACKET = "task-5-uploaded-csv"; //BUCKET_NAME
	const catalogPath = `uploaded/${fileName}`; // FILE_NAME
	const signedUrlExpireSeconds = 60*5; //EXPIRATION

	const bucketParams = {
    	Bucket: BACKET,
    	Key: catalogPath,
//    	Expires: signedUrlExpireSeconds,
    	ContentType: 'text/csv'
		}

	const client = new S3Client({ region: 'eu-central-1' });
	const command = new PutObjectCommand(bucketParams);
  
  	try {
  		const url = await getSignedUrl(client, command);
  		console.log(`Getting signedUrl to put "${catalogPath}" to "${bucketParams.Backet}".\nSinedURL :`, url);
  		resault = url;
  			
    	} catch (err) {
    	console.log("Error during presigned URL", err);
    	resault = null;
    	}

  	return resault;
};