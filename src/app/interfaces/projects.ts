export interface IProjects {
    title: string;
    projects: Array<{
        title: string,
        htmlDescription : string,
        href: string,
        usedApplications: Array<string>
    }>;
}
