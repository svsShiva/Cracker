import mongoose from 'mongoose';

import { Artifact } from './models/artifacts';
import { ArtifactStatus } from './enums/artifact-enums';

export class ProjectDB {
    public artifactCollection: any;

    constructor() {
        this.artifactCollection = Artifact;
    }

    public getAllArtifacts= async () => {
        return new Promise((res, rej) => {
            try {
                this.artifactCollection.find({ status: { $in: [ArtifactStatus.Active] } },
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

    public createArtifact = async (data: any) => {
        return new Promise((res, rej) => {
            try {
                this.artifactCollection.insertMany( [data],
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

    public deleteArtifact= async (id: String) => {
        return new Promise((res, rej) => {
            try {
                this.artifactCollection.deleteOne({ _id: id },
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