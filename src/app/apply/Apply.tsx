import { useGetJobBySlug } from "./usecase/useGetJobBySlug";
import { useParams } from "react-router-dom";
import JobLabel from "@/shared/components/job-label/JobLabel";
import ApplyForm from "./components/form/ApplyForm";
import { ApplyFormFields } from "./models/applyFormSchema";

const Apply = () => {

    const { slug } = useParams<{ slug: string }>();

    const { job, isLoading, error } = useGetJobBySlug(slug || "");

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!job) {
        return <p>Job not found</p>;
    }

    const handleSubmit = (data: ApplyFormFields) => {
        console.log(data)
    }

    return (
        <div className="p-12">
            <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
            <p className="text-xl mb-2">{job.company_name}</p>
            <p className="text-gray-600">{job.location}</p>
            <p className="mt-4">{job.description}</p>

            <div className="flex gap-2 mt-4">
                {job.tags.map((tag, index) => (
                    <JobLabel text={tag} key={index + 1} />
                ))}
            </div>
            <ApplyForm
                onSubmit={handleSubmit}
                defaultValues={{
                    fullName: '',
                    email: '',
                }}
            />
        </div>
    );
};

export default Apply;
