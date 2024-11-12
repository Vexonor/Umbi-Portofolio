"use client";

import { FloatingNavbar } from "./components/navbar";
import HomeSection from "./section/home";
import AboutSection from "./section/about";
import ProjectSection from "./section/project";
import MemberSection from "./section/member";
import Footer from "./components/footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="">
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-golden-poppy origin-[0%]" style={{ scaleX }} />
      <FloatingNavbar />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <MemberSection />
      <Footer />
    </div>
  );
}
