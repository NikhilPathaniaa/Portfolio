import Image from "next/image";
import { useEffect } from "react";
import {
  FaArrowUpRightFromSquare,
  FaBullseye,
  FaPuzzlePiece,
  FaRegFileLines,
  FaStar,
} from "react-icons/fa6";
import ImageGallery from "./ImageGallery";

interface PortfolioData {
  id: number;
  preview: string;
  title: string;
  client: string;
  video?: string;
  languages: string;
  content: string;
  image: string;
  category: string;
  solution: string;
  result: string;
  challenge: string;
  images?: string[];
  imageCaptions?: string[];
  designation: string;
  feedback: string;
  onClose: () => void;
}

const DataPopUp = (props: PortfolioData) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const liveHref =
    props.preview?.startsWith("http") || props.preview?.startsWith("https")
      ? props.preview
      : props.preview
      ? `https://${props.preview}`
      : "";
  console.log('DataPopUp props:', {
    hasImages: !!props.images,
    images: props.images,
    captions: props.imageCaptions
  });
  return (
    <div className="fixed inset-0 z-[99999] flex items-end md:items-center justify-center bg-black/70 px-2 sm:px-4">
      <div className="relative w-full max-w-7xl overflow-hidden rounded-t-[28px] md:rounded-3xl bg-white shadow-2xl dark:bg-[#151515]">
        <button
          aria-label="Close popup"
          onClick={props.onClose}
          className="absolute right-5 top-5 z-10 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-gray-800 shadow hover:bg-white dark:bg-[#2c2c2c] dark:text-gray-100"
        >
          Close ✕
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          <div className="space-y-10 p-4 sm:p-6 md:p-10">
            <div className="overflow-hidden rounded-[26px] border border-neutral-200/80 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0b1224] text-white shadow-xl dark:border-neutral-800">
              <div className="relative h-full min-h-[320px] overflow-hidden">
                <Image
                  src={props.image}
                  alt={props.title}
                  width={1100}
                  height={640}
                  className="h-full w-full object-cover opacity-90"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Tag tone="light">{props.category}</Tag>
                    {props.client && <Tag tone="dark">{props.client}</Tag>}
                    {props.preview && <Tag tone="success">Live</Tag>}
                  </div>
                  <h1 className="text-3xl font-semibold leading-tight md:text-4xl">{props.title}</h1>
                  <p className="text-sm text-white/80 md:text-base">{props.languages}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-6 py-4 text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <FaStar className="h-4 w-4" />
                  <span>Case study view</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={props.onClose}
                    className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/60"
                  >
                    Back to list
                  </button>
                  {liveHref && (
                    <a
                      href={liveHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#ffacc2]"
                    >
                      View product
                      <FaArrowUpRightFromSquare />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-12 px-2 sm:px-0">
              <Section title="Project Overview">
                <div className="rounded-3xl border border-neutral-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-neutral-800/70 dark:bg-[#1a1a1a]">
                  <div className="grid gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ef4060]/12 text-[#ef4060]">
                          <FaRegFileLines />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                            Context
                          </p>
                        </div>
                      </div>
                      <RichText html={props.content} />
                    </div>

                    <div className="lg:col-span-4 space-y-3">
                      <OverviewFact label="Focus area" value={props.category} />
                      <OverviewFact label="Role" value={props.languages} />
                      {props.client && <OverviewFact label="Partner / org" value={props.client} />}
                      {props.preview && <OverviewFact label="Live" value={liveHref || props.preview} isLink={!!liveHref} />}
                    </div>
                  </div>
                </div>
              </Section>

              <Section title="Key Highlights">
                <div className="space-y-6">
                  <HighlightLine icon={<FaBullseye />} title="Challenge" text={props.challenge} />
                  
                  {props.images && props.images.length > 0 && (
                    <ImageGallery 
                      images={props.images || []} 
                      captions={props.imageCaptions || []} 
                    />
                  )}
                  
                  <HighlightLine icon={<FaPuzzlePiece />} title="Solution" text={props.solution} />
                  <HighlightLine icon={<FaStar />} title="Impact" text={props.result} />
                </div>
              </Section>

              {props.video && (
                <Section title="Walkthrough">
                  <div className="relative overflow-hidden rounded-2xl bg-black/5 pt-[56.25%] dark:bg-white/5">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${props.video}`}
                      title={`${props.title} walkthrough`}
                      allowFullScreen
                    />
                  </div>
                </Section>
              )}

              <div className="rounded-3xl bg-neutral-50 p-6 text-center dark:bg-[#262626]">
                <h4 className="text-xl font-semibold text-neutral-900 dark:text-white">More case studies</h4>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  Explore outcomes, decisions, and shipped work across different products.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={props.onClose}
                    className="rounded-full border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-500"
                  >
                    Back to portfolio
                  </button>
                  {liveHref && (
                    <a
                      href={liveHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-[#111827]"
                    >
                      View product
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPopUp;

/* ================= SMALL COMPONENTS ================= */

const Tag = ({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" | "success" }) => {
  const styles = {
    light: "bg-white/80 text-gray-900",
    dark: "bg-black/60 text-white",
    success: "bg-green-500/90 text-white",
  }[tone];
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles}`}>{children}</span>;
};

// const MetaItem = ({
//   icon,
//   label,
//   value,
//   isLink,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: string;
//   isLink?: boolean;
// }) => {
//   const content = isLink ? (
//     <a href={value} target="_blank" rel="noreferrer" className="text-[#ef4060] hover:text-[#ff6b81]">
//       {value}
//     </a>
//   ) : (
//     value
//   );

//   return (
//     <div className="flex items-start gap-3 rounded-2xl border border-neutral-100 bg-white/60 px-3 py-3 text-sm font-medium text-neutral-800 shadow-sm backdrop-blur dark:border-neutral-700 dark:bg-[#1f1f1f] dark:text-neutral-100">
//       <span className="mt-0.5 text-[#ef4060]">{icon}</span>
//       <div>
//         <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">{label}</p>
//         <p className="mt-1 leading-relaxed">{content}</p>
//       </div>
//     </div>
//   );
// };

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">{title}</h2>
    {children}
  </div>
);

const HighlightLine = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => (
  <div className="flex gap-4 rounded-2xl border border-neutral-200/60 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-neutral-800/60 dark:bg-[#1f1f1f]">
    <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900/5 text-[#ef4060] dark:bg-white/10">
      {icon}
    </span>
    <div className="space-y-1">
      <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{title}</h3>
      <RichText html={text} />
    </div>
  </div>
);

const OverviewFact = ({
  label,
  value,
  isLink,
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) => (
  <div className="rounded-2xl border border-neutral-200/70 bg-white/80 px-4 py-3 text-sm font-medium text-neutral-800 shadow-sm dark:border-neutral-800/70 dark:bg-[#1f1f1f] dark:text-neutral-100">
    <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">{label}</p>
    {isLink ? (
      <a href={value} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-2 text-[#ef4060] hover:text-[#ff6b81]">
        {value}
        <FaArrowUpRightFromSquare className="h-3 w-3" />
      </a>
    ) : (
      <p className="mt-1 leading-relaxed">{value}</p>
    )}
  </div>
);

const RichText = ({ html }: { html: string }) => (
  <p
    className="text-justify text-base leading-relaxed text-neutral-700 dark:text-neutral-300"
    dangerouslySetInnerHTML={{
      __html: html.replace(/\n/g, "<br />"),
    }}
  />
);
