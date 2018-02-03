export interface Skills {
    title : string;
    content : Array<{
        pannelTitle: string,
        pannelContent: Array<{
            skillName: string,
            rate: number
        }>
    }>;
}
