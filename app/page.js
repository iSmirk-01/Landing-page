'use client'
import Link from "next/link";
import Service from "./components/Service"; //header, details, label

export default function Home() {

  return (
    <div className="flex flex-col items-center overflow-x-hidden h-full">
      <main className="flex flex-col gap-5 p-4 h-full">
        <Service
          header="Parts Consultation"
          details="Whether you're experienced or a first time builder, we offer personalized advice and detailed recommendations that is tailored to your needs and budget. We'll guide you through selecting the best components for your custom build, ensuring compatibility, optimal performance and future proofing your investment.*(Pricing on components vary on the market, we will strive to get you the best prices from whats available)*"
          label="For Consultation Services"
          button={"Details"}
          html={
            <div className="flex flex-col gap-4 text-white">
              <h1 className="self-center">Parts Consultation</h1>
              <p>Please contact me to discus details and Pricing</p>
              <Link
                className="self-center bg-cyan-400 px-3 py-1 rounded"
                href="/contacts"
              >
                <button className="">Contacts</button>
              </Link>
            </div>
          }
        />
        <Service
          header="Pre-Built Configuration & Delivery"
          details="For those who've purchased a pre-built PC and need it tuned (bios, drivers, updates). We’ll optimize your system for peak performance, ensuring the full capability of your build. Once your PC is configured, we offer on-campus delivery, bringing your optimized machine right to your building.*(For builds not purchased through our services require handoff at the GCU mail center or delivered under my name)*"
          label="For Pre-Built Services"
          button={"Details and Pricing"}
          html={
            <div className="text-white flex flex-col gap-3 justify-center items-center">
              <h1>Pre-Built Configuration & Delivery</h1>
              <p>
                Pre-Buit Configuration (dedicated software installation, RAM
                optimization, drivers, updates & Temperature Tests) | $25 + $5
                Delivery Fee (optional)
              </p>
              <button className="bg-cyan-400 px-4 py-1 rounded">Example</button>
            </div>
          }
        />
        <Service
          header="On Campus Assembly"
          details="From selecting the components to the assembly, we ensure every detail. We will work with you every step of the way to ensure your custom PC meets all your expectations. As well as on-campus delivery service, bringing your fully assembled and tested PC right to your location. Enjoy a seamless and personalized PC building experience with our service."
          label="For Custom Build Services"
          button={"Details and Pricing"}
          html={
            <div className="text-white flex flex-col gap-3 justify-center items-center">
              <h1>On Campus Assembly</h1>
              <p>
                Supply your parts (or let me find parts within your budget and
                for a fee $10/hr) and I can assemble your rig | $50 Basic
                Assembly | Pro Assembly $60 | Full Assembly $75 | + $5 Delivery
                Fee (optional)(All Flat Rate)
              </p>
              <button className="bg-cyan-400 px-4 py-1 rounded">Example</button>
            </div>
          }
        />
      </main>
    </div>
  );
}
