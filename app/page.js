import Service from "./components/Service"; //header, details, label
import ThemeToggle from "./components/ThemeToggleButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Shop</h1>
      <ThemeToggle />
      <Service
        header="Parts Consultation"
        details="Looking to build your perfect PC and unsure of where to start? We can provide a PC parts consultation. Whether you're experienced or a first time builder, we offer personalized advice and detailed recommendations that is tailored to your needs and budget. We'll guide you through selecting the best components for your custom build, ensuring compatibility, optimal performance and future proofing your investment.
        *(Pricing on components vary on the market, we will strive to get you the best prices from whats available)*"
        label="For Consultation Services"
      />
    </div>
  );
}
