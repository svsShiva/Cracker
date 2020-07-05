import express from 'express';
const bodyParser = require('body-parser');
import mongoose from 'mongoose';

import cors from 'cors';

import { Config } from './config/config';
import { ArtifactsRouter } from './routers/artifacts-router';
import { ProjectsRouter } from './routers/projects-router';

class App {

    public app: express.Application;
    public mongoUrl: string;
    public artifactsRouter: ArtifactsRouter;
    public projectsRouter: ProjectsRouter;

    constructor() {
        this.app = express();
        this.setRouters();
        this.config();
        this.mongoUrl = Config.getInstance().getMongoUrl();
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
            .then((data) => console.log("DB connected"))
            .catch(error => console.log(error))
    }

    private setRouters(): void {
        this.artifactsRouter = new ArtifactsRouter();
        this.projectsRouter = new ProjectsRouter();
    }

    private config(): void {
        this.app.use(cors());
        this.app.options('*', cors());
        this.app.use(bodyParser.json()) // for parsing application/json
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use('/artifacts', this.artifactsRouter.routes());
        this.app.use('/projects', this.projectsRouter.routes());

        this.app.use((err, req, res, next) => {
            if (err) {
                if (err.statusCode && err.message) {
                    return res.status(err.statusCode).json({ message: err.message })
                }
                console.log(err);
                return res.status(500).json({ message: "Service not available" });
            } else {
                next();
            }
        });
    }
}

export default new App().app;