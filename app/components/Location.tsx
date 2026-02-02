"use client";

import { MapPin, Phone, Mail, Globe2, Clock } from "lucide-react";

const offices = [
  {
    id: "pk",
    flag: "/pakistan-flag.png",
    label: "Pakistan Head Office",
    address: "Suite No. 201, 2nd Floor, P.E.C.H.S Block 2, Main Tariq Road, Karachi",
    phones: [
      "+92 335 4832487 (0333–LiveBits)",
      "+92 333 3444825 (0333–Digital)",
    ],
    email: "info@livebits.pk",
    website: "livebits.pk",
    hoursWeek: "Mon–Fri: 9 AM – 6 PM",
    hoursSat: "Saturday: 9 AM – 4 PM",
  },
  {
    id: "uk",
    flag: "/UK-flag.png",
    label: "UK Head Office",
    address: "246–250 Romford Road, London E7 9HZ, United Kingdom",
    phones: ["+44 7869 436361"],
    email: "info@thelivebits.co.uk",
    website: "thelivebits.co.uk",
    hoursWeek: "Mon–Fri: 9 AM – 6 PM",
    hoursSat: "Saturday: 9 AM – 4 PM",
  },
];

export default function ContactOfficesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-[1250px] flex-col gap-10 px-6 md:px-8">
        {/* Cards row */}
        <div className="grid gap-8 md:grid-cols-2">
          {offices.map((office) => (
            <div
              key={office.id}
              className="group rounded-[12px] bg-[#EEDC82] px-8 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_28px_70px_rgba(0,0,0,0.12)] hover:bg-[#f8e7a1]"
            >
              {/* Header */}
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center ">
                    <img
                    src={office.flag}
                    alt={office.label}
                    className="h-10 w-10 object-contain"
                    />
                </span>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#111111]">
                    {office.label}
                  </h3>
                </div>
              </div>

              {/* Body info */}
              <div className="space-y-2 text-[13px] text-[#3F3F3F]">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-[2px] h-4 w-4 text-[#111111]" />
                  <p>{office.address}</p>
                </div>

                {office.phones.map((phone) => (
                  <div key={phone} className="flex items-start gap-2">
                    <Phone className="mt-[2px] h-4 w-4 text-[#111111]" />
                    <p>{phone}</p>
                  </div>
                ))}

                <div className="flex items-start gap-2">
                  <Mail className="mt-[2px] h-4 w-4 text-[#111111]" />
                  <p>{office.email}</p>
                </div>

                <div className="flex items-start gap-2">
                  <Globe2 className="mt-[2px] h-4 w-4 text-[#111111]" />
                  <p>{office.website}</p>
                </div>

                <div className="mt-3 space-y-1">
                  <div className="flex items-start gap-2">
                    <Clock className="mt-[2px] h-4 w-4 text-[#111111]" />
                    <p>{office.hoursWeek}</p>
                  </div>
                  <div className="flex items-start gap-2 pl-6">
                    <p>{office.hoursSat}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map embed */}
        <div className="overflow-hidden rounded-[12px] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <iframe
            className="h-[420px] w-full rounded-[12px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28948.835535676947!2d67.0408001!3d24.8728008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f90c9599a1d%3A0x5a145f4c03f0a1b7!2sLiveBits!5e0!3m2!1sen!2s!4v1732168964000!5m2!1sen!2s
"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
