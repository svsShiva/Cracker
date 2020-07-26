import { Router, Request, Response } from 'express';

import { ProjectsController } from '../controllers/projects-controller';
import { Logger } from '../middleware/logger';

export class ProjectsRouter {
    private router: Router;
    private projectsController: ProjectsController;

    constructor() {
        this.router = Router();
        this.projectsController = new ProjectsController();
    }


    public routes(): Router {
        this.router
            .get('/', Logger.log, this.projectsController.getAllProjects);
        this.router
            .delete('/:id', Logger.log, this.projectsController.deleteProject);
        this.router
            .post('/create', Logger.log, this.projectsController.createProject);

        return this.router;
    }
}