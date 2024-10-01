export default interface CvData {
  personalData: {
    firstName: string;
    lastName: string;
    title: string;
    address: string;
    email: string;
    phone: string;
    website: string;
  };
  skills: string[];
  languages: {
    name: string;
    level: string;
  }[];
  interests: string[];
  experiences: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  formations: {
    title: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
  }[];
}
