import ProfilePicture from './components/ProfilePicture'
import ProfileImg from '@/assets/default-profile-picture.jpg'

const Navbar = () => {
    return (
        <nav className="w-full px-8 py-4 flex items-center justify-between shadow-1 ">
            <h1 className="text-xl font-semibold">Workshop 2.0</h1>
            <ProfilePicture
                imageUrl={ProfileImg}
                name='Panjul'
            />
        </nav>
    )
}

export default Navbar

// Halo gais gua gabut, lu mau tau ga sebenernya gua tuh punya crush sama sando anjir atuh ganteng banget dia apalagi kumis nya <3