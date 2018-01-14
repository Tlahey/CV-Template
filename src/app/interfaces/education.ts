export interface Education {
    icon: string;
    title: string;
    content: Array<{
        title: string,
        company: string,
        periode: string,
        htmlDescription: string
    }>
}
