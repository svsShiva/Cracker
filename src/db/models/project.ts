import * as mongoose from 'mongoose';

import { DBConstants } from '../constants';
import { ProjectStatus } from '../enums/project-enums';

const Schema = mongoose.Schema;

export const projectSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: "-"
    },
    status: {
        type: String,
        enum: Object.values(ProjectStatus),
        default: ProjectStatus.Active
    },
    environments: {
        type: Array,
        default: []
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

export const Project = mongoose.model(
    DBConstants.ProjectCollection,
    projectSchema
);