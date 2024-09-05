interface IProfilePicture {
    imageUrl: string;
    name: string
}

const ProfilePicture = ({
    imageUrl,
    name
}: IProfilePicture) => {
    return (
        <div className="flex items-center gap-4 cursor-pointer">
            <p className="text-sm">{name}</p>
            <img
                src={imageUrl}
                alt={`${name} profile picture`}
                className="size-8 rounded-full"
            />
        </div>
    )
}

export default ProfilePicture