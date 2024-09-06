import { useState, useEffect } from "react";
import { IDetailJobData } from "@/shared/models/jobInterfaces";
import { jobService } from "@/shared/repositories/JobService";
import { IGeneralAPIResponse } from "@/shared/models/generalInterfaces";

export const useGetAllJobs = (): IGeneralAPIResponse<IDetailJobData[]> => {
  const [response, setResponse] = useState<IGeneralAPIResponse<IDetailJobData[]>>({
    data: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const fetchJobs = async () => {
      setResponse((prevState) => ({ ...prevState, isLoading: true }));
      try {
        const jobData = await jobService.getAllJobs();
        setResponse({ data: jobData, isLoading: false, error: null });
      } catch (err) {
        setResponse({ data: null, isLoading: false, error: "Failed to fetch jobs" });
      }
    };

    fetchJobs();
  }, []);

  return response;
};
