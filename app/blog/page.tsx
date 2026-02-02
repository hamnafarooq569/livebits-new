import AutomateWorkSection from "../components/AutomateWork";
import { BlogFooterArticles } from "../components/BlogFooter";
import BlogHeroSection from "../components/BlogHero";
import BlogSection from "../components/BlogSection";
import NewsletterSection from "../components/NewsLetter";
import RecommendsSection from "../components/RecommendsSection";



export default function BlogPage() {
  return (
    <>
      <BlogHeroSection/>
      <NewsletterSection/>
      <BlogSection />
      <AutomateWorkSection/>
      <RecommendsSection/>

      
    </>
  );
}
