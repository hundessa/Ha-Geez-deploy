import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Category from "./Components/Category";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Popular_Courses from "./Components/Popular_Courses";
import Testimonials from "./Components/Testimonials";


const Home_Page = () => {
  return (
    <>
      <Header />
      <Banner />
      <Category />
      <div id="about-us-section">
        <AboutUs />
      </div>
      <Popular_Courses />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home_Page;
