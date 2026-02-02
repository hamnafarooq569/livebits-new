"use client";

import { useState } from "react";

export default function CursorTooltip({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={(e) => {
        // element ke andar mouse position
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      {children}

      {show && (
        <span
          className="
            pointer-events-none absolute z-[9999]
            whitespace-nowrap bg-white/80 px-3 py-1
            text-[11px] font-semibold text-black shadow-md border border-black rounded-[5px]
          "
          style={{
            left: pos.x + 14,   // cursor se right gap
            top: pos.y - 10,    // thora upar
          }}
        >
          {label}
        </span>
      )}
    </span>
  );
}
