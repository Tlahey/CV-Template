export interface IContacts {
    icon: string;
    title: string;
    content: Array<{
        icon: string,
        tooltip: string,
        url: string
    }>;
}
