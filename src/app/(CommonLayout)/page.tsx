import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import OurProduct from "@/components/OurProduct";
import OurServices from "@/components/OurServices";
import OurStory from "@/components/OurStory";
import OurValues from "@/components/OurValues";
import TheStudio from "@/components/TheStudio";
import Why from "@/components/Why";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Why />
      <OurStory />
      <OurProduct />
      <OurServices />
      <AboutUs />
      <OurValues />
      <TheStudio />
      <Contact />
    </main>
  );
};

export default HomePage;
