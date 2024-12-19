import Service from "./components/Service"; //header, details, label
import NavNar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden h-screen">
      <NavNar header="M2 HQ" />
      <p className="text-lg p-5">
        *Services vary due to my class schedule.* For additional information or
        questions, please reach out via my Contacts page*
      </p>
      <main className="flex flex-col gap-5 p-4">
        <Service
          header="Parts Consultation"
          details="Looking to build your perfect PC and unsure of where to start? We can provide a PC parts consultation. Whether you're experienced or a first time builder, we offer personalized advice and detailed recommendations that is tailored to your needs and budget. We'll guide you through selecting the best components for your custom build, ensuring compatibility, optimal performance and future proofing your investment.
          *(Pricing on components vary on the market, we will strive to get you the best prices from whats available)*"
          label="For Consultation Services"
        />
        <Service
          header="Pre-Built Configuration & Delivery"
          details="For those who've purchased a pre-built PC and need it tuned (bios, drivers, updates. We’ll optimize your system for peak performance, ensuring the full capability of your build. Once your PC is configured, we offer on-campus delivery, bringing your optimized machine right to your building.*(For builds not purchased through our services require handoff at the GCU mail center or delivered under my name)*"
          label="For Pre-Built Services"
        />
        <Service
          header="Pre-Built Configuration & Delivery"
          details="For those who've purchased a pre-built PC and need it tuned (bios, drivers, updates. We’ll optimize your system for peak performance, ensuring the full capability of your build. Once your PC is configured, we offer on-campus delivery, bringing your optimized machine right to your building.*(For builds not purchased through our services require handoff at the GCU mail center or delivered under my name)*"
          label="For Custom Build Services"
        />
      </main>
      <footer>
        <Footer footer="All custom build services come with a money back guarantee if parts are delivered damaged or defective. Replacements are subject to the supplier the component was purchased from." />
      </footer>
    </div>
  );
}
