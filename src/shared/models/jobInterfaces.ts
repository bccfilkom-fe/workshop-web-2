import { ILinkResponse, IMteaData } from "./generalInterfaces";

export interface IDetailJobData {
    slug: string;
    company_name: string;
    title: string;
    description: string;
    remote: boolean;
    url: string;
    tags: string[];
    job_types: string[];
    location: string;
    created_at: Date;
}

export interface IAllJobResponseRoot {
    data: IDetailJobData[];
    links: ILinkResponse;
    meta: IMteaData;
}

