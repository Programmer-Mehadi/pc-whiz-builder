import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const RootLayout = ({children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>

    </>
  )
}

export default RootLayout;