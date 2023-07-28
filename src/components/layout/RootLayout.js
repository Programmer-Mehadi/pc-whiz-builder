import FooterSection from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
export const metadata = {
  title: "Purely Write",
  description: "A simple blog app with Next.js and TailwindCSS",
};
const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <section className="max-w-screen min-h-[66vh]">
        {children}
      </section>
      <FooterSection></FooterSection>

    </>
  )
}

export default RootLayout;