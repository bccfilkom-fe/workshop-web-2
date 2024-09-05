import FELogo from "@/assets/FE.png"

const Footer = () => {
    return (
        <footer className="w-full px-20 py-10 h-[40vdh] bg-primary-500 text-white flex flex-col items-center justify-center">
            <p>Made with 🤍 by Kumis Sando</p>
            <img src={FELogo} alt="Logo" />
        </footer>
    )
}

export default Footer