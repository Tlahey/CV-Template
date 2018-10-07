export interface ISkills {
    title : string;
    content : Array<ISkillsContent>
}

export interface ISkillsContent{
    pannelTitle: string,
    pannelContent: Array<{
        skillName: string,
        progress: number
    }>
}