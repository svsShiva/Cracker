import { Request, Response } from "express";

import { ArtifactsService } from '../services/artifacts-service';

export class ArtifactsController {

    private artifactsService: ArtifactsService;

    constructor() {
        this.artifactsService = new ArtifactsService();
    }

    public postArtifact = async (req: Request, res: Response) => {
        try {
            let data = await this.artifactsService.postArtifacts(req);
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    }


}