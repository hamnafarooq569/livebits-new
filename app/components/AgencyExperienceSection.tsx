// app/components/AgencyExperienceSection.tsx
"use client";

import { useEffect, useState } from "react";

function useCountUp(target: number, duration = 3000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return count;
}

export default function AgencyExperienceSection() {
  const projects = useCountUp(1300);
  const team = useCountUp(300);
  const years = useCountUp(17);

  return (
    <section className="w-full bg-[#EEDC82] text-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-10">
        {/* Top text */}
        <p className="font-serif text-[70px] font-extrabold tracking-tight text-black uppercase">
          17+
        </p>

        <h2 className="mt-2 text-center font-serif text-[50px] font-extrabold leading-snug tracking-tight">
          Being a Best Digital Marketing Agency
        </h2>

        {/* Stats row */}
        <div className="mt-7 grid w-full gap-10 text-center sm:grid-cols-3">
          {/* Stat 1 */}
          <div>
            <div className="font-serif text-[44px] font-bold tracking-tight">
              {projects}+
            </div>
            <p className="mt-1 text-[14px] font-semibold uppercase tracking-[0.18em] text-gray-800">
              Completed Projects
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="font-serif text-[44px] font-bold tracking-tight">
              {team}+
            </div>
            <p className="mt-1 text-[14px] font-semibold uppercase tracking-[0.18em] text-gray-800">
              Designers & Developers
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="font-serif text-[44px] font-bold tracking-tight">
              {years}+
            </div>
            <p className="mt-1 text-[14px] font-semibold uppercase tracking-[0.18em] text-gray-800">
              Years Of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
