import HeroSlider from "./components/HeroSlider";
import OurServices from "./components/OurServices";
import SaltCaveSection from "./components/SaltCaveSection";
import WelcomeSection from "./components/WelcomeSection";
import YourGiftCards from "./components/YourGiftCards";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <YourGiftCards />
      <WelcomeSection />
      <OurServices />
      <SaltCaveSection />
      </>
  );
}
