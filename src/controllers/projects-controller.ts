import { Request, Response } from "express";

import { ProjectsService } from '../services/projects-service';
import { ProjectRequest, ProjectResponse } from "../api-models/project-models";
import { APIResponse } from "../api-models/api-response";

export class ProjectsController {

    private projectsService: ProjectsService;

    constructor() {
        this.projectsService = new ProjectsService();
    }

    public createProject = async (req: Request, res: Response) => {
        let response: APIResponse;
        try {
            let project: ProjectRequest = req.body;
            let data: ProjectResponse = await this.projectsService.createProject(project);
            if (data) {
                response = {
                    statusCode: 200,
                    message: "Success",
                    details: "New project created",
                    isSuccess: true,
                    body: data
                }
                res.status(200).json(response);
            }
            else {
                response = {
                    statusCode: 500,
                    message: "Error",
                    details: "Something went wrong",
                    isSuccess: false,
                    body: undefined
                }
                res.status(500).json(response)
            }

        } catch (error) {
            response = {
                statusCode: 500,
                message: "Error",
                details: `Error: ${error}`,
                isSuccess: false,
                body: undefined
            }
            res.status(500).json(response);
        }
    }

    
    public getAllProjects = async (req: Request, res: Response) => {
        let response;
        try {
            let projects: any = await this.projectsService.getAllProjects();

            if (projects) {
                response = {
                    statusCode: 200,
                    message: "Success",
                    details: "Success",
                    isSuccess: true,
                    body: projects
                }
                res.status(200).json(response);
            }
            else {
                response = {
                    statusCode: 500,
                    message: "Error",
                    details: "Something went wrong",
                    isSuccess: false,
                    body: undefined
                }
                res.status(500).json(response)
            }
        }
        catch (error) {
            response = {
                statusCode: 500,
                message: "Error",
                details: `Error: ${error}`,
                isSuccess: false,
                body: undefined
            }
            res.status(500).json(response);
        }
    }

    public deleteProject = async (req: Request, res: Response) => {
        let response;
        try {
            if (req.params.id) {
                let isDeleted: any = await this.projectsService.deleteProject(req.params.id);

                if (isDeleted) {
                    response = {
                        statusCode: 200,
                        message: "Success",
                        details: "Project Deleted",
                        isSuccess: isDeleted,
                        body: isDeleted
                    }
                    res.status(200).json(response);
                }
            }
            else {
                response = {
                    statusCode: 500,
                    message: "Error",
                    details: "Project not found",
                    isSuccess: false,
                    body: undefined
                }
                res.status(500).json(response)
            }
        }
        catch (error) {
            response = {
                statusCode: 500,
                message: "Error",
                details: `Error: ${error}`,
                isSuccess: false,
                body: undefined
            }
            res.status(500).json(response);
        }
    }
}