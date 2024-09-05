import { IDetailJobData } from "@/shared/models/jobInterfaces"
import JobCard from "../job-card/JobCard"

interface INewestJobSection {
  jobs?: IDetailJobData[]
}

const NewwestJobSection = ({
  jobs
}: INewestJobSection) => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold">Newest Job</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {jobs?.map((job) => (
          <JobCard key={job.slug} {...job} />
        ))}
      </div>
    </section>
  )
}

export default NewwestJobSection