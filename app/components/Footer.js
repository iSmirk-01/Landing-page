const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-Charcoal gap-4 mt-8 text-Yellow footerHighlight">
      <div className="flex">
        <p className="text-center text-sm md:text-base max-w-3xl p-3">
          Disclaimer: All custom build services come with a money-back guarantee
          if parts are delivered damaged or defective. Replacements are subject
          to the supplier from which the component was purchased. I{" "}
          <span className="font-semibold">do not</span> purchase parts for
          customers.
        </p>
        <p className="text-center text-sm md:text-base max-w-3xl p-3">
          Policy: All Pre-Built Configuration & Assembly Services will include
          testing. The customer has until the end of the day of delivery for
          customer service via my Contacts. After of which anything after that
          point I am &apos;NOT&apos; responsible. I am a one man army so please
          be considerate!
        </p>
      </div>
      <hr className="w-full border-t-2 border-Yellow" />
      <p className="text-center text-xs md:text-sm p-3">
        © 2025 Our Services. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
