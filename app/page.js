'use client'

import Service from "./components/Service"; //header, details, label


export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden h-full">
      <main className="flex flex-col gap-5 p-4 h-full">
        <Service
          header="Parts Consultation"
          details="Whether you're experienced or a first time builder, we offer personalized advice and detailed recommendations that is tailored to your needs and budget. We'll guide you through selecting the best components for your custom build, ensuring compatibility, optimal performance and future proofing your investment.*(Pricing on components vary on the market, we will strive to get you the best prices from whats available)*"
          label="For Consultation Services"
        />
        <Service
          header="Pre-Built Configuration & Delivery"
          details="For those who've purchased a pre-built PC and need it tuned (bios, drivers, updates). We’ll optimize your system for peak performance, ensuring the full capability of your build. Once your PC is configured, we offer on-campus delivery, bringing your optimized machine right to your building.*(For builds not purchased through our services require handoff at the GCU mail center or delivered under my name)*"
          label="For Pre-Built Services"
        />
        <Service
          header="On Campus Assembly"
          details="From selecting the components to the assembly, we ensure every detail. We will work with you every step of the way to ensure your custom PC meets all your expectations. As well as on-campus delivery service, bringing your fully assembled and tested PC right to your location. Enjoy a seamless and personalized PC building experience with our service."
          label="For Custom Build Services"
        />
      </main>
    </div>
  );
}
