import { S3Helper } from '../helpers/s3-helper';
import { FsHelper } from '../helpers/fs-helper';

export class ArtifactsService {
    private s3Helper: S3Helper;
    private fsHelper: FsHelper;

    constructor() {
        this.s3Helper = new S3Helper();
        this.fsHelper = new FsHelper();
    }

    public postArtifacts = async (req) => {
        let artifact = req.files[0];
        let file = await this.fsHelper.readFile(artifact.path);
        let data = await this.s3Helper.uploadFileToS3(artifact.filename, file)
        return new Promise((resolve, reject) => {
            if (data) {
                resolve("success");
            }
            else {
                reject("failed");
            }
        });
    }
}