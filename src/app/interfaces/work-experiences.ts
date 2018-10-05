export interface IWorkExperiences {
    icon: string;
    title: string;
    content : Array<{
        title: string,
        company: string,
        periode: string,
        htmlDescription: string | Array<string>
    }>
}
