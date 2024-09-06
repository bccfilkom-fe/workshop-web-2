interface IJobLabel {
    text: string;
}

const JobLabel = ({ text }: IJobLabel) => {
    return (
        <span className="p-2 rounded-sm bg-secondary-100 text-gray-800 text-[10px]">
            {text}
        </span>
    )
}

export default JobLabel