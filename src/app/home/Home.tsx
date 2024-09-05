import { useEffect, useState } from "react";
import Navbar from "@/shared/components/navbar/Navbar";
import HeroSection from "./components/section/HeroSection";
import NewwestJobSection from "./components/section/NewestJobSection";
import { IDetailJobData } from "@/shared/models/jobInterfaces";
import { jobService } from "@/shared/repositories/JobService";
import Footer from "@/shared/components/footer/Footer";

const Home = () => {
    const [jobs, setJobs] = useState<IDetailJobData[]>([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobData = await jobService.getAllJobs();
                setJobs(jobData);
            } catch (error) {
                console.error("Failed to fetch jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <main className='w-full h-screen'>
            <Navbar />
            <div className="p-12 space-y-20 z-10">
                <HeroSection />
                <NewwestJobSection jobs={jobs} />
            </div>
            <Footer />
        </main>
    );
};

export default Home;
