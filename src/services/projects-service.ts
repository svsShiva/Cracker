import { ProjectRequest, ProjectResponse } from "../api-models/project-models";
import { ProjectDB } from '../db/projects.db';

export class ProjectsService {
    private projectDB: ProjectDB;
    constructor() {
        this.projectDB = new ProjectDB();
    }

    public createProject = async (project: ProjectRequest) => {
        try {
            let data: any = await this.projectDB.createProject(project);
            return data;
        }
        catch(error) {
            throw error;
        }
    }
}