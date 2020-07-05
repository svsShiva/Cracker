export class ProjectRequest {
    name: String;
    description: String;
    environments: Array<String>;
}  

export class ProjectResponse {
    _id: String;
    name: String;
    description: String;
    environments: Array<String>;
    createdAt: String;
    updatedAt: String;
}