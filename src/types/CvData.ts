export default interface CvData {
    personalData:{
        firstName: string;
        lastName: string;
        title: string;
        address: string;
        email: string;
        phone: string;
        website: string;
    }

    // experiences: Experience[];
    // educations: Education[];
    skills: string[];
    languages: {
        name: string;
        level: string;
    }[];
    interests: string[];
}