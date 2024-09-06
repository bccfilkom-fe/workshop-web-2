import { useGetAllJobs } from "./usecase/useGetAllJobs";
import HeroSection from "./components/section/HeroSection";
import NewwestJobSection from "./components/section/NewestJobSection";

const Home = () => {
  const {
    data: jobs,
    isLoading,
    error
  } = useGetAllJobs();

  return (
    <div className="p-12 space-y-20 z-10">
      <HeroSection />
      {isLoading && <p>Loading jobs...</p>}
      {error && <p>{error}</p>}
      {jobs && <NewwestJobSection jobs={jobs} />}
    </div>
  );
};

export default Home;
