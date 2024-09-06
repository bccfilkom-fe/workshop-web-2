import { Outlet } from "react-router-dom";
import Navbar from "@/shared/components/navbar/Navbar";
import Footer from "@/shared/components/footer/Footer";

const GeneralLayout = () => {
    return (
        <main className="w-full h-screen">
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    );
};

export default GeneralLayout;
