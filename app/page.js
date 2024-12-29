'use client'
import Link from "next/link";
import Service from "./components/Service"; //header, details, label

export default function Home() {

  return (
    <div className="flex flex-col items-center overflow-x-hidden h-full">
      <main className="flex flex-col gap-5 p-4 h-full">
        <Service
          header="Parts Consultation"
          details="Whether you're an experienced builder or embarking on your first custom project,
          we offer personalized advice and detailed recommendations tailored to your needs and budget.
          We’ll guide you through selecting the best components for your custom build,
          ensuring compatibility, optimal performance, and future-proofing your investment.
          Please note: Pricing on components may vary depending on market conditions,
           but we’ll always strive to secure the best prices from available options."
          button={"Details"}
          html={
            <div className="flex flex-col gap-4">
              <h1 className="self-center text-Yellow font-bold">
                Parts Consultation
              </h1>
              <p className="text-white">
                📩 Contact us for more details and a personalized quote. Let’s
                build something amazing together!
              </p>
              <Link
                className="self-center bg-blue-500 hover:bg-Yellow text-white active:bg-blue-300 px-3 py-1 rounded"
                href="/contacts"
              >
                <button>Contacts</button>
              </Link>
            </div>
          }
        />
        <Service
          header="Have a pre-built PC that needs fine-tuning?"
          details={
            <>
              We offer expert optimization services, including BIOS setup,
              driver installation, and updates, to unlock your system&apos;s
              full potential and ensure peak performance. Once your PC is fully
              configured, we provide convenient on-campus delivery straight to
              your building.{" "}
              <span className="font-semibold text-Yellow">Please note:</span>{" "}
              For builds not purchased through our services, handoff will be
              required at the GCU mail center or delivered under my name.
            </>
          }
          label="For Pre-Built Services"
          button={"Details and Pricing"}
          html={
            <div className="text-white flex flex-col gap-3 justify-center items-center">
              <h1 className="text-Yellow font-semibold">Pre-Built Configuration & Delivery</h1>
              <p>
                Pre-Buit Configuration (dedicated software installation, RAM
                optimization, drivers, updates & Temperature Tests) | $25 + $5
                Delivery Fee (optional)
              </p>
              <Link
                className="self-center bg-blue-500 hover:bg-Yellow text-white active:bg-blue-300 px-3 py-1 rounded"
                href="/contacts"
              >
                <button>Contacts</button>
              </Link>
            </div>
          }
        />
        <Service
          header="On Campus Assembly"
          details="From component selection to assembly, we take care of every detail.
          We’ll work closely with you every step of the way to ensure your custom PC meets all your expectations.
          In addition to assembly, we offer an on-campus delivery service,
          bringing your fully assembled and rigorously tested PC directly to your location.
          Enjoy a seamless and personalized PC-building experience with our dedicated service."
          label="For Custom Build Services"
          button={"Details and Pricing"}
          html={
            <div className="flex flex-col gap-3 justify-center items-center">
              <h1 className="text-Yellow font-semibold">On Campus Assembly</h1>
              <p className="text-white">
                Supply your parts (or let me find parts within your budget and
                for a fee $10/hr) and I can assemble your rig | $50 Basic
                Assembly | Pro Assembly $60 | Full Assembly $75 | + $5 Delivery
                Fee (optional)(All Flat Rate)
              </p>
              <Link
                className="self-center bg-blue-500 hover:bg-Yellow text-white active:bg-blue-300 px-3 py-1 rounded"
                href="/contacts"
              >
                <button>Contacts</button>
              </Link>
            </div>
          }
        />
      </main>
    </div>
  );
}
