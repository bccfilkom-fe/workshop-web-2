import { useState, useEffect } from "react";
import { IDetailJobData } from "@/shared/models/jobInterfaces";
import { jobService } from "@/shared/repositories/JobService";

export const useGetJobBySlug = (slug: string) => {
  const [job, setJob] = useState<IDetailJobData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      setIsLoading(true);
      try {
        const jobData = await jobService.getJobBySlug(slug);
        if (jobData) {
          setJob(jobData);
        } else {
          setError("Job not found");
        }
      } catch (err) {
        setError("Failed to fetch job");
      } finally {
        setIsLoading(false);
      }
    };

    fetchJob();
  }, [slug]);

  return { job, isLoading, error };
};
