import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <section className="max-w-screen">
        {children}
      </section>
      <Footer></Footer>

    </>
  )
}

export default RootLayout;