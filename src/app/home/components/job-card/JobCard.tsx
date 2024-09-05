import { IDetailJobData } from "@/shared/models/jobInterfaces"

import JobThumbnail from "@/assets/job-thumbnail.jpg"
import Button from "@/shared/components/buttons/Button"

const JobCard = (job: IDetailJobData) => {
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
                        <span className="p-2 rounded-sm bg-secondary-100 text-gray-800 text-[10px]" key={index + 1}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-end justify-end mt-8">
                    <Button>
                        Apply Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default JobCard