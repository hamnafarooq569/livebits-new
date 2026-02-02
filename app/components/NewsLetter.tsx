"use client";

interface NewsletterSectionProps {
  bgColor?: string;  // Background color can be passed as a prop
}

export default function NewsletterSection({
  bgColor = "#EEDC82",  // Default background color
}: NewsletterSectionProps) {
  return (
    <section className={`w-full py-8 px-6`} style={{ backgroundColor: bgColor }}>
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
          Get productivity tips delivered straight
          <br />
          to your inbox
        </h2>

        {/* Input + Button */}
        <div className="mt-8 flex justify-center gap-3 flex-col sm:flex-row items-center">

          <input
            type="email"
            placeholder="Email address"
            className="w-full sm:w-[280px] border rounded-md py-3 px-4 outline-none bg-white"
          />

          <button className="w-full sm:w-auto bg-[#fee000] hover:bg-[#3730A3] text-black font-medium py-3 px-6 border rounded-md transition">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}
