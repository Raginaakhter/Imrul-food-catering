import AboutSection from "@/components/Home/Hero/AboutSection";
import CardSection from "@/components/Home/Hero/Cardsection";
import FeaturesBanner from "@/components/Home/Hero/FeaturesBanner";
import Hero from "@/components/Home/Hero/Hero";
import MerqueBrands from "@/components/Home/MerqueBrand/MarqueBrands";

const Home = () => {
  return (
    <div>
      <Hero />
      <MerqueBrands></MerqueBrands>
      <AboutSection></AboutSection>
      <CardSection></CardSection>
      <FeaturesBanner></FeaturesBanner>
      
    </div>
  );
};

export default Home;
