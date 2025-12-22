"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { portfolio } from "@/data/PortfolioData";

const HIGHLIGHT_COUNT = 4;

const WorkHighlights = () => {
  const items = portfolio.slice(0, HIGHLIGHT_COUNT);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    if (!items.length) return;
    const len = items.length;
    const normalized = ((index % len) + len) % len;
    setActive(normalized);
  };

  if (!items.length) return null;

  const current = items[active];

  return (
    <section className="mt-10 mb-6 rounded-3xl border border-neutral-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-[#111111]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Selected work
          </p>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Recent product and platform work
          </h2>
        </div>
        <Link
          href="/work"
          className="text-sm font-semibold text-[#ef4060] hover:text-[#ff6b81]"
        >
          View all work →
        </Link>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-12 items-center">
        <div className="md:col-span-7">
          <div className="relative h-64 overflow-hidden rounded-2xl bg-neutral-900/5 dark:bg-[#1f1f1f]">
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
              priority={active === 0}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col gap-4">
          <div>
            <span className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
              {current.category}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-white">
              {current.title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {current.client}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {current.content}
          </p>

          <div className="mt-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous project"
                onClick={() => goTo(active - 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:border-neutral-400 dark:border-neutral-700 dark:bg-[#1a1a1a] dark:text-neutral-100"
              >
                ‹
              </button>
              <button
                aria-label="Next project"
                onClick={() => goTo(active + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:border-neutral-400 dark:border-neutral-700 dark:bg-[#1a1a1a] dark:text-neutral-100"
              >
                ›
              </button>
            </div>

            <div className="flex items-center gap-1">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  aria-label={`Go to ${item.title}`}
                  onClick={() => goTo(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === active
                      ? "w-6 bg-[#ef4060]"
                      : "w-2 bg-neutral-300 dark:bg-neutral-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHighlights;


