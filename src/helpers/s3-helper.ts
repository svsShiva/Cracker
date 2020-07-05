const AWS = require('aws-sdk');

AWS.config.region = 'us-east-1';

export class S3Helper {
    private s3;
    private bucketName: string;

    constructor() {
        this.s3 = new AWS.S3();
        this.bucketName = "albaccesslogsfortest"
    }

    public uploadFileToS3 = (fileName, fileContent) => {
        return new Promise((resolve, reject) => {
            const params = {
                Bucket: this.bucketName,
                Key: fileName,
                Body: fileContent
            };
            this.s3.upload(params, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    
    public getFileFromS3 = (fileName) => {
        return new Promise((resolve, reject) => {
            const params = {
                Bucket: this.bucketName,
                Key: fileName,
            };
            this.s3.getObject(params, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
}
