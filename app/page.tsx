import HeroSlider from "./components/HeroSlider";
import OurServices from "./components/OurServices";
import SaltCaveSection from "./components/SaltCaveSection";
import WelcomeSection from "./components/WelcomeSection";
import WorkingHoursSection from "./components/WorkingHours";
import YourGiftCards from "./components/YourGiftCards";
import CTASection from "./services/enospheres-neveskin/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <YourGiftCards />
      <WelcomeSection />
      <OurServices />
      <WorkingHoursSection />
      <SaltCaveSection />
      <CTASection />
      </>
  );
}
