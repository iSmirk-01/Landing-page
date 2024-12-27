"use client";

function Notice() {

  return (
    <p
      aria-live="polite"
      className={`text-lg sm:text-base p-5 flex justify-center text-white`}
    >
      <em>
        Services vary due to my class schedule. For additional information or
        questions, please reach out via my Contacts page.
      </em>
    </p>
  );
}

export default Notice;
