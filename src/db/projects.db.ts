import mongoose from 'mongoose';

import { Project } from './models/project';
import { ProjectStatus } from './enums/project-enums';
import { ProjectRequest, ProjectResponse } from '../api-models/project-models';

export class ProjectDB {
    public projectCollection: any;

    constructor() {
        this.projectCollection = Project;
    }

    public getAllProjects = async () => {
        return new Promise((res, rej) => {
            try {
                this.projectCollection.find({ status: { $in: [ProjectStatus.Active] } },
                    function (err: any, docs: any) {
                        if (err) {
                            rej(err);
                        }
                        else {
                            res(docs);
                        }
                    });

            } catch (error) {
                rej(error)
            }
        });
    }

    public createProject = async (data: ProjectRequest) => {
        return new Promise((res, rej) => {
            try {
                this.projectCollection.insertMany( [data],
                    function (err: any, docs: any) {
                        if (err) {
                            rej(err);
                        }
                        else {
                            res(docs);
                        }
                    });

            } catch (error) {
                rej(error)
            }
        });
    }

    public deleteProject = async (id: String) => {
        return new Promise((res, rej) => {
            try {
                this.projectCollection.deleteOne({ _id: id },
                 function (err: any) {
                     if(err){
                         rej(err) ;
                     }
                     else {
                         res(true)
                     }
                 });

            } catch (error) {
                rej(error)
            }
        });
    }
}