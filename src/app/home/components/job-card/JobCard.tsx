import { IDetailJobData } from "@/shared/models/jobInterfaces"

import JobThumbnail from "@/assets/job-thumbnail.jpg"
import Button from "@/shared/components/buttons/Button"
import { useNavigate } from "react-router-dom"
import JobLabel from "@/shared/components/job-label/JobLabel"

const JobCard = (job: IDetailJobData) => {

    const navigate = useNavigate();

    return (
        <div className="border rounded-lg shadow-md">
            <img
                src={JobThumbnail}
                alt={`${job.title} thumbnail`}
                className="rounded-t-lg aspect-square w-full object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-gray-600 mb-2">{job.company_name}</p>
                <p className="text-sm mb-2">{job.location}</p>
                <div className="flex items-center flex-wrap gap-x-2 gap-y-4">
                    {job.tags.map((tag, index) => (
                        <JobLabel text={tag} key={index + 1} />
                    ))}
                </div>
                <div className="flex items-end justify-end mt-8">
                    <Button
                        onClick={() => navigate(`/${job.slug}`)}
                    >
                        Apply Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default JobCard