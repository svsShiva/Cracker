import { Router, Request, Response } from 'express';

import { ArtifactsController } from '../controllers/artifacts-controller';
import { Logger } from '../middleware/logger';
import { Multer } from '../helpers/multer'

export class ArtifactsRouter {
    private router: Router;
    private artifactsController: ArtifactsController;
    private multer: Multer;

    constructor() {
        this.router = Router();
        this.artifactsController = new ArtifactsController();
        this.multer = new Multer('./data/artifacts/', true)
    }


    public routes(): Router {
        this.router
            .post('/', Logger.log, this.multer.upload.array('data'), this.artifactsController.postArtifact);
        
        return this.router;
    }
}