export interface Contact {
    icon: string;
    title: string;
    content: Array<{
        icon: string,
        tooltip: string,
        url: string
    }>;
}
