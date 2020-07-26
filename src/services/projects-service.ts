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

    public getAllProjects = async () => {
        try {
            let data: any = await this.projectDB.getAllProjects();
            return data;
        }
        catch(error) {
            throw error;
        }
    }

    public deleteProject = async (id: String) => {
        try {
            let data: any = await this.projectDB.deleteProject(id);
            return data;
        }
        catch(error) {
            throw error;
        }
    }
}