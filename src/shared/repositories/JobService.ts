import { IDetailJobData } from "@/shared/models/jobInterfaces";
import mockJobs from "../models/jobMockData";

class JobService {

    private async delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public async getAllJobs(): Promise<IDetailJobData[]> {
        await this.delay(500); 
        return mockJobs;
    }

}

export const jobService = new JobService();
