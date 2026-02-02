"use client";

import Image from "next/image";
import { useState } from "react";

export default function Domain() {
  const [domain, setDomain] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "available" | "unavailable" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const checkDomain = async () => {
    const q = domain.trim();
    if (!q) return;

    setStatus("loading");
    setMessage("");

    try {
      // ✅ Frontend-only direct call (works ONLY if server allows CORS)
      const res = await fetch(
        `/api/domain-search?domain=${encodeURIComponent(q)}`,
        { method: "GET" }
      );


      const text = await res.text();
      console.log("API RAW RESPONSE 👉", text);
      const t = text.toLowerCase();

      // ✅ flexible detection (because we don't know exact response format)
      // If response contains "not available"/"unavailable"/"taken" -> unavailable
      // Else if contains "available" -> available
      const isUnavailable =
        t.includes("not available") || t.includes("unavailable") || t.includes("taken") || t.includes("already");

      const isAvailable = t.includes("available") && !isUnavailable;

      if (isAvailable) {
        setStatus("available");
        setMessage(`${q} is Available`);
      } else if (isUnavailable) {
        setStatus("unavailable");
        setMessage(`${q} is Not Available`);
      } else {
        // fallback: show raw response for debugging (you can remove later)
        setStatus("error");
        setMessage("Could not detect status. API response format is different.");
        // console.log(text); // uncomment to see response
      }
    } catch (err) {
      // Most common: CORS blocked
      setStatus("error");
      setMessage("Request blocked (likely CORS). This cannot be fixed from frontend-only.");
    }
  };

  return (
    <section className="relative overflow-hidden bg-black">
      {/* ---- Yellow Glow ---- */}
      <div className="pointer-events-none absolute right-[-240px] top-[-180px] h-[650px] w-[650px] rounded-full bg-[#FFD956]/25 blur-[180px]" />

      {/* ---- Dotted Shape ---- */}
      <div className="pointer-events-none absolute right-[40px] top-6 w-[340px] opacity-50 rotate-[10deg]">
        <Image src="/hero-shp.png" alt="shape" width={340} height={340} />
      </div>

      {/* ---- Yellow Glow (Left Bottom) ---- */}
      <div className="pointer-events-none absolute left-[-260px] bottom-[-220px] h-[650px] w-[650px] rounded-full bg-[#FFD956]/25 blur-[180px]" />

      {/* ---- Dotted Shape (Left Bottom) ---- */}
      <div className="pointer-events-none absolute left-[40px] bottom-[-40px] w-[340px] opacity-50 rotate-[2deg] scale-x-[1]">
        <Image src="/hero-shp.png" alt="shape" width={340} height={340} />
      </div>

      {/* CENTER CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <p className="text-[18px] font-semibold tracking-wide text-white">
            Buy a domain and everything else you need
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-[72px] md:leading-[1.03]">
            Search & Get Your Securable Domain Now
          </h1>

          <p className="mt-6 max-w-3xl text-base text-white sm:text-lg md:text-2xl">
            Most Trsusted and Reasonable
          </p>

          {/* SEARCH BAR */}
          <div className="mt-10 w-full max-w-3xl">
            <div className="flex w-full overflow-hidden rounded-[15px] bg-white border border-black">
              <input
                type="text"
                placeholder="Type the Domain You Want"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && checkDomain()}
                className="flex-1 border-none px-4 py-3 text-[18px] text-gray-800 outline-none"
              />

              <button
                onClick={checkDomain}
                className="flex items-center justify-center bg-[#fee000] px-8 text-[18px] border-l border-black font-semibold text-black transition-colors hover:bg-[#ffde33]"
              >
                {status === "loading" ? "Searching..." : "Search"}
              </button>
            </div>

            {/* RESULT BADGE */}
            {status !== "idle" && (
              <div className="mt-4 flex justify-center">
                {status === "available" && (
                  <div className="rounded-md border border-green-400 bg-green-500/15 px-4 py-2 text-green-200 text-[14px]">
                    ✅ {message}
                  </div>
                )}

                {status === "unavailable" && (
                  <div className="rounded-md border border-red-400 bg-red-500/15 px-4 py-2 text-red-200 text-[14px]">
                    ❌ {message}
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-md border border-yellow-300 bg-yellow-400/10 px-4 py-2 text-yellow-100 text-[14px]">
                    ⚠️ {message}
                  </div>
                )}

                {status === "loading" && (
                  <div className="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white text-[14px]">
                    Checking…
                  </div>
                )}
              </div>
            )}
          </div>

          {/* TLD PRICES (unchanged) */}
          <div className="mt-8 space-y-2 text-[14px] sm:text-[15px]">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <span className="font-bold text-[18px] text-[#fee000]">
                .com <span className="font-normal text-[14px] text-white">Rs 5,500/- (Yearly)</span>
              </span>
              <span className="font-bold text-[18px] text-[#fee000]">
                .net <span className="font-normal text-[14px] text-white">Rs 5,500/- (Yearly)</span>
              </span>
              <span className="font-bold text-[18px] text-[#fee000]">
                .org <span className="font-normal text-[14px] text-white">Rs 5,500/- (Yearly)</span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <span className="font-bold text-[18px] text-[#fee000]">
                .pk <span className="font-normal text-[14px] text-white">Rs 5,500/- (Biennially)</span>
              </span>
              <span className="font-bold text-[18px] text-[#fee000]">
                .com.pk <span className="font-normal text-[14px] text-white">Rs 5,500/- (Biennially)</span>
              </span>
              <span className="font-bold text-[18px] text-[#fee000]">
                .edu.pk <span className="font-normal text-[14px] text-white">Rs 5,500/- (Biennially)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
