const fs = require('fs');

export class FsHelper {

    constructor() {
    }

    public writeFile = (fileName, fileContent) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(fileName, fileContent, function (err) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(fileName);
            });
        })
    }

    public readFile = (fileName) => {
        return new Promise((resolve, reject) => {
            fs.readFile(fileName, function (err, data) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(data);
            });
        })
    }
}
