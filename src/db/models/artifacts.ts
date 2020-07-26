import * as mongoose from 'mongoose';

import { DBConstants } from '../constants';
import { ProjectStatus } from '../enums/project-enums';

const Schema = mongoose.Schema;

export const artifactSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: DBConstants.ProjectCollection
    },
    path: {
        type: String,
        require: true
    },
    status: {
        type: String,
        enum: Object.values(ProjectStatus),
        default: ProjectStatus.Active
    },
    environment: {
        type: String,
        required: true
    },
    repoBranch: {
        type: String,
        required: true
    },
    repoCommitMessage: {
        type: String,
        required: true
    },
    jenkinsJob: {
        type: String,
        required: true
    },
    jenkinsBuildNumber: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        default: (new Date()).getTime()
    },
    updatedAt: {
        type: Number,
        default: (new Date()).getTime()
    }
},
    {
        timestamps: true
    }
);

export const Artifact = mongoose.model(
    DBConstants.ProjectCollection,
    artifactSchema
);