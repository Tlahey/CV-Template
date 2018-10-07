export interface ICoverLatter{
    title:{
        date: string,
        name: string,
        profile: string
    },
    content:{
        title: string,
        contentHtml: Array<string>,
        footer: string
    },
    signature:{
        name: string,
        profile: string,
        town: string
    }
}