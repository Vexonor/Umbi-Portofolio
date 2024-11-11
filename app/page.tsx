"use client";

import { FloatingNavbar } from "./components/navbar";
import HomeSection from "./section/home";
import AboutSection from "./section/about";
import ProjectSection from "./section/project";
import MemberSection from "./section/member";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="">
      <FloatingNavbar />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <MemberSection />
      <Footer />
    </div>
  );
}
