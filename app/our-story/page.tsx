import FounderStory from "../components/our-story/FounderStory";
import HealingExperience from "../components/our-story/HealingExperience";
import MissionVision from "../components/our-story/MissionVision";
import OurStoryHero from "../components/our-story/StoryIntro";
import OurSpaceGallery from "../components/our-story/OurSpaceGallery";
import EmotionalSection from "../components/our-story/EmotionalSection";
import CtaSection from "../services/enospheres-neveskin/CtaSection";


export default function OurStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <OurStoryHero />
      <FounderStory />
      <MissionVision />
      <HealingExperience />
      <OurSpaceGallery />
      <EmotionalSection />
      <CtaSection />      
    </>
  );
}
