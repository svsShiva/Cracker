export class ArtifactRequest {
    name: String;
    environment: String;
    jenkinsJob: String;
    jenkinsBuildNumber: String;
    repoBranch: String;
    repoCommitMessage: String
}  

export class ArtifactResponse {
    _id: String;
    name: String;
    description: String;
    environments: Array<String>;
    createdAt: String;
    updatedAt: String;
}