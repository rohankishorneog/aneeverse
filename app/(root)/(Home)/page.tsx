import Benefits from "@/app/components/benefit-section/BenefitSection";
import FeatureSection from "@/app/components/feature-section/FeatureSection";
import Footer from "@/app/components/footer/Footer";
import HeroSection from "@/app/components/hero-section/HeroSection";
import ServiceSection from "@/app/components/services/ServiceSection";
import TestimonialSlider from "@/app/components/Testimonials/Testimonials";
import TrustedSection from "@/app/components/trusted-companies/TrustedSection";
import WorkSection from "@/app/components/work-section/WorkSection";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <TrustedSection />
      <ServiceSection />
      <FeatureSection />
      <WorkSection />
      <TestimonialSlider />
      <Benefits />
      <Footer />
    </div>
  );
};

export default page;
