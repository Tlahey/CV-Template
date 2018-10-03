export interface ISkills {
    title : string;
    content : Array<{
        pannelTitle: string,
        pannelContent: Array<{
            skillName: string,
            rate: number
        }>
    }>;
}
