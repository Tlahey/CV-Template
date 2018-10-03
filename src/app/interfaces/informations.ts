export interface IInformations {

    me: {
        photoUrl: string,
        firstName: string,
        lastName: string,
        job: string
    };

    description : {
        icon: string
        content: string;
    };

    phones : {
        icon: string,
        content: Array<{
            number: string,
            legend: string
        }>;
    };

    emails: {
        icon: string,
        content: Array<{
            email: string,
            legend: string
        }>;
    };

    address: {
        icon: string,
        number: number,
        street: string,
        additionalAddress: string,
        city: string,
        country: string,
        zipCode: number
    };

    skills: Array<{
        skillName: string,
        progress: number
    }>;
}
