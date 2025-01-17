import { ToastContainer } from "react-toastify";
import FooterSection from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: "Purely Write",
  description: "A simple blog app with Next.js and TailwindCSS",
};
const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <section className="max-w-screen min-h-[80vh]">
        {children}
        <ToastContainer />
      </section>
      <FooterSection></FooterSection>

    </>
  )
}

export default RootLayout;