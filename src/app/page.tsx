import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import CategorySection from '../components/CategorySection';
import CourseSection from '../components/CourseSection';
import FeaturedContent from '../components/FeaturedContent';
import TrendingCoursesList from '../components/TrendingCoursesList';
import InstructorSection from '../components/InstructorSection';
import ExploreMoreSection from '../components/ExploreMoreSection';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow px-4 py-8 max-w-[1200px] mx-auto w-full">
        <HeroBanner />
        <CategorySection />
        <CourseSection title="Popular Courses" type="popular" />
        <FeaturedContent />
        <TrendingCoursesList />
        {/* <InstructorSection /> */}
        <ExploreMoreSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
}
 
