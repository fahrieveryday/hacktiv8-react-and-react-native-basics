import AboutSection from './components/about-section';
import AnnouncementSection from './components/announcement-section';
import Footer from './components/footer';
import MemberSection from './components/member-section';
import Navbar from './components/navbar';
import PastMeetupsSection from './components/past-meetups-section';
import ProfileSection from './components/profile-section';

export function HomePage() {
  return (
    <>
      <Navbar />
      <ProfileSection />
      <AnnouncementSection />
      <AboutSection />
      <MemberSection />
      <PastMeetupsSection />
      <Footer />
    </>
  );
}
