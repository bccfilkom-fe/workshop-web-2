import { IDetailJobData } from "@/shared/models/jobInterfaces";
import mockJobs from "../models/jobMockData";

class JobService {

    private async delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public async getAllJobs(): Promise<IDetailJobData[]> {
        await this.delay(1000); 
        return mockJobs;
    }

    public async getJobBySlug(slug: string): Promise<IDetailJobData | null> {
        await this.delay(1000);  
        const job = mockJobs.find((job) => job.slug === slug);
        return job || null;  
    }

}

export const jobService = new JobService();
