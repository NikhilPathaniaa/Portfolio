"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import DataPopUp from "./DataPopUp";

interface portfolioData {
  id: number;
  preview: string;
  title: string;
  client: string;
  image: string;
  video: string;
  languages: string;
  content: string;
  category: string;
  designation: string;
  feedback: string;
  images?: string[];
  imageCaptions?: string[];
  solution: string;
  result: string;
  challenge: string;
}

const PortfolioList = (props: portfolioData) => {
  const [showModel, setShowModel] = useState(false);

  const summary = useMemo(() => {
    const plain = props.content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (plain.length <= 160) return plain;
    return `${plain.slice(0, 157)}...`;
  }, [props.content]);

  const focusTags = useMemo(() => {
    return props.languages
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 3);
  }, [props.languages]);

  const liveHref =
    props.preview?.startsWith("http") || props.preview?.startsWith("https")
      ? props.preview
      : props.preview
      ? `https://${props.preview}`
      : "";

  return (
    <>
      <div className="portfolio_list-two-items isotop-item plugin custom">
        <div
          key={props.id}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-neutral-800 dark:bg-[#1a1a1a]"
        >
          <div className="relative h-60 overflow-hidden">
            <Image
              width={800}
              height={500}
              className="h-full w-full object-cover transition duration-500 ease-in-out group-hover:scale-105"
              src={props.image}
              alt={props.title}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <Badge tone="light">{props.category}</Badge>
              {props.preview && <Badge tone="success">Live</Badge>}
            </div>
            <button
              onClick={() => setShowModel(true)}
              className="absolute inset-0 flex items-end justify-between bg-black/0 px-5 pb-4 text-left text-white transition duration-300 group-hover:bg-black/20"
            >
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.15em] text-white/70">Case Study</p>
                <h3 className="text-xl font-semibold leading-tight">{props.title}</h3>
                <p className="text-sm text-white/80">{props.client}</p>
              </div>
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black transition group-hover:translate-x-1">
                View
              </span>
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-4 p-5">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{summary}</p>

            <div className="flex flex-wrap gap-2">
              {focusTags.map((tag) => (
                <Badge key={tag} tone="muted">
                  {tag}
                </Badge>
              ))}
              <Badge tone="muted">{props.client}</Badge>
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
              <button
                aria-label="Open case study"
                onClick={() => setShowModel(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#ef4060] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ff6b81]"
              >
                Read case study
              </button>

              {liveHref && (
                <Link
                  href={liveHref}
                  target="_blank"
                  className="text-sm font-semibold text-[#ef4060] transition hover:text-[#ff6b81]"
                >
                  Live preview →
                </Link>
              )}
            </div>
          </div>
        </div>

        {showModel && (
          <DataPopUp
            designation={props.designation}
            feedback={props.feedback}
            title={props.title}
            category={props.category}
            image={props.image}
            images={props.images}
            imageCaptions={props.imageCaptions}
            id={props.id}
            video={props.video}
            content={props.content}
            preview={props.preview}
            client={props.client}
            languages={props.languages}
            solution={props.solution}
            result={props.result}
            challenge={props.challenge}
            onClose={() => setShowModel(false)}
          />
        )}
      </div>
    </>
  );
};

const Badge = ({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "success" | "muted";
}) => {
  const styles = {
    light: "bg-white/90 text-gray-900",
    success: "bg-green-500/90 text-white",
    muted: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200",
  }[tone];

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${styles}`}>
      {children}
    </span>
  );
};

export default PortfolioList;
