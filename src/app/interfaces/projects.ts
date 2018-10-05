export interface IProjects {
    title: string;
    projects: Array<{
        title: string,
        htmlDescription : string | Array<string>,
        href: string,
        usedApplications: Array<{
            name: string,
            icon: string
        }>
    }>;
}
