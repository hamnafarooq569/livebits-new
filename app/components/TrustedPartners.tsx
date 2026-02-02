"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Partner {
  name: string;
  logoUrl: string;
  link?: string;
}

const partners: Partner[] = [
  { name: "cPanel", logoUrl: "/cpanel.svg", link: "#" },
  { name: "Webmail", logoUrl: "/webmail.svg", link: "#" },
  { name: "WHM", logoUrl: "/whm.svg", link: "#" },
  { name: "WHMCS", logoUrl: "/whmcs.svg", link: "#" },
  { name: "CloudLinux", logoUrl: "/cloudlinux.svg", link: "#" },
  { name: "GWS", logoUrl: "/gws.svg", link: "#" },
  { name: "Sectigo", logoUrl: "/sectigo.svg", link: "#" },
];

export default function TrustedPartners() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Trusted Partners
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We proudly collaborate with these amazing organizations to deliver
          exceptional digital solutions.
        </motion.p>

        {/* Partners Row - clean inline logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 py-4">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={partner.logoUrl}
                alt={partner.name}
                width={130}
                height={70}
                className="object-contain"
                priority
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Subtle background glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
