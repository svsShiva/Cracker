import multer from "multer";

export class Multer {
    private destinationPath: string;
    private addFilter: boolean;

    constructor(destinationPath: string, addFilter: boolean) {
        this.destinationPath = destinationPath;
        this.addFilter = addFilter;
    }

    public storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, this.destinationPath);
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    });

    public fileFilter = (req, file, cb) => {
        if (this.addFilter) {
            cb(null, true);
        }
        else {
            if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ||
                file.mimetype === 'image/jpg' || file.mimetyp === 'application/zip') {
                cb(null, true);
            } else {
                cb(null, false);
            }
        }
    };

    public upload = multer({
        storage: this.storage,
        limits: {
            fileSize: 1024 * 1024 * 5
        },
        fileFilter: this.fileFilter
    });

}
